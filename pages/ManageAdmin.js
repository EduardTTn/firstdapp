import React, {Component} from 'react';
import instance from '../components/carrecord.js';
import Head from "next/head";
import {Button, Container, Dropdown, Form, Icon, Image, Menu, Message, Segment} from "semantic-ui-react";
import web3 from "../components/web3.js"
import Link from 'next/link';
import FixedMenuLayout from "../components/footer";
import SimpleSnackbar from "../components/snackbar";

class ManageAdmin extends Component {

    state = {
        loading: false,
        errorMessage: '',
        errorRemoveMessage: '',
        errorSearchMessage: '',
        name: '',
        removeadmin: '',
        address: '',
        accounts: [],
        adminsearch: '',
        isAdmin: false,
        showifadmin: false
    };

    //upon submitting, the function calls addAdmin method of the contract
    onSubmit = async event => {
        event.preventDefault();

        this.setState({loading: true, errorMessage: ''});

        try {
            this.setState({accounts: await web3.eth.getAccounts()});
            this.setState({errorRemoveMessage: ''});
            this.setState({errorSearchMessage: ''});

            await instance.methods.addAdmin(this.state.address, this.state.name).send({
                from: this.state.accounts[0]
            })

        } catch (err) {
            this.setState({loading: false});
            if (this.state.address === '' || this.state.name === '') {
                this.setState({errorMessage: "Fields can't be empty"});
            } else if (err.message.includes('invalid address'))
                this.setState({errorMessage: 'invalid address'});
        }
        this.setState({loading: false});
    };

    //upon submitting, the function calls removeAdmin method of the contract
    onSubmitRemove = async event => {
        event.preventDefault();
        this.setState({accounts: await web3.eth.getAccounts()});
        this.setState({errorMessage: ''});
        this.setState({errorRemoveMessage: ''});
        try {
            this.setState({loading: true, errorSearchMessage: ''});
            if (this.state.removeadmin === '') {
                this.setState({errorRemoveMessage: 'Field is empty'})
            } else {
                await instance.methods.removeAdmin(this.state.removeadmin).send({
                    from: this.state.accounts[0]
                });
            }
        } catch (error) {
            this.setState({errorRemoveMessage: error.message});
        }
        this.setState({loading: false});
    };

    //upon submitting, the checkAdmin function of the contract
    onSubmitSearch = async event => {
        try {
            event.preventDefault();
            this.setState({accounts: await web3.eth.getAccounts()});
            this.setState({errorMessage: ''});
            this.setState({errorRemoveMessage: ''});
            this.setState({loading: true, errorSearchMessage: ''});

            if (this.state.adminsearch === '') {
                this.setState({errorSearchMessage: 'Field is empty'});
            } else {
                this.setState({isAdmin: await instance.methods.checkAdmin(this.state.adminsearch).call()});
                this.setState({showifadmin: true});
            }
        } catch (err) {
            this.setState({errorSearchMessage: err.message});
        }
        this.setState({loading: false});
    };

    //handle methods are changing the states and prevent the default behaviour
    handleChangeAddress = event => {
        event.preventDefault();
        this.setState({address: event.target.value});
        this.setState({errorMessage: ''});
        this.setState({showifadmin: false});
    };

    handleChangeName = event => {
        event.preventDefault();
        this.setState({name: event.target.value});
        this.setState({errorMessage: ''});
        this.setState({errorRemoveMessage: ''});
        this.setState({errorSearchMessage: ''});
        this.setState({showifadmin: false});
    };

    handleRemoveName = event => {
        event.preventDefault();
        this.setState({removeadmin: event.target.value});
        this.setState({errorMessage: ''});
        this.setState({errorRemoveMessage: ''});
        this.setState({errorSearchMessage: ''});
        this.setState({showifadmin: false});

    };

    handleSearch = event => {
        event.preventDefault();
        this.setState({adminsearch: event.target.value});
        this.setState({errorMessage: ''});
        this.setState({errorRemoveMessage: ''});
        this.setState({errorSearchMessage: ''});
        this.setState({showifadmin: false});
    };

    render() {

        let buttonStyle = {
            margin: '4px'
        };

        let cardStyle = {
            width: '50%',
            margin: '100px auto'

        };

        let labelStyle = {
            margin: '10px'
        };

        let formstyle = {
            opacity: '100%'
        };

        {
            return (
                <div>
                    <div>
                        <Menu fixed='top' inverted>
                            <Container>
                                <Link href="/index">
                                    <Menu.Item as='a' header>
                                        <Image size='normal' src='https://img.icons8.com/cotton/50/000000/retro-car.png'
                                               style={{marginLeft: '1.5em'}}/>
                                        <h2>Car Record</h2>
                                    </Menu.Item>
                                </Link>
                                <Menu.Item as='a'><Link href="/ManageAdmin">Manage Admin</Link></Menu.Item> :
                                <Dropdown item simple text='Manage Cars'>
                                    <Dropdown.Menu>
                                        <Link href="/AddCar">
                                            <Dropdown.Item as='a'>Add Car</Dropdown.Item>
                                        </Link>
                                        <Link href="/ModifyCar">
                                            <Dropdown.Item as='a'>Modify Car</Dropdown.Item>
                                        </Link>
                                        <Link href="/AddEvent">
                                            <Dropdown.Item as='a'>Add Event</Dropdown.Item>
                                        </Link>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Container>
                        </Menu>
                    </div>
                    <Head>
                        <link
                            rel="stylesheet"
                            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                        />
                        <style>{`
        body {
         background: url("https://images.pexels.com/photos/707047/pexels-photo-707047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1900");
         background-repeat: no-repeat;
         background-position: center; 
        }
      `}</style>
                    </Head>
                    <h1 style={{margin: '20px'}}>Manage Admins</h1>
                    <Segment inverted style={cardStyle}>
                        <label style={labelStyle}><h3>Add Admin</h3></label>
                        <Form inverted className={"form-inline"} onSubmit={this.onSubmit}
                              error={!!this.state.errorMessage} style={formstyle}>
                            <Form.Group inline style={{width: '60%', margin: '30px auto'}}>
                                <Form.Field required style={{width: '70%', margin: '10px'}}>
                                    <Form.Input fluid label="Admin Address:" placeholder="Address of the Admin"
                                                aria-placeholder={{color: 'purple'}}
                                                style={{width: '100%'}}
                                                value={this.state.address}
                                                onChange={this.handleChangeAddress}
                                                error={!!this.state.errorMessage}
                                    />
                                    <Form.Input fluid label="Admin Name:" placeholder="Name of the Admin"
                                                aria-placeholder={{color: 'purple'}}
                                                style={{width: '96.555%'}}
                                                value={this.state.name}
                                                onChange={this.handleChangeName}
                                                error={!!this.state.errorMessage}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button onClick={this.onSubmit} color={"purple"}>
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form.Group>
                            <Message style={buttonStyle} error header={"Error!"} content={this.state.errorMessage}/>
                        </Form>
                    </Segment>
                    <Segment inverted style={cardStyle}>
                        <label style={labelStyle}><h3>Remove Admin</h3></label>
                        <Form inverted className={"form-inline"} onSubmit={this.onSubmit}
                              error={!!this.state.errorRemoveMessage} style={formstyle}>
                            <Form.Group inline style={{width: '60%', margin: '50px auto',}}>
                                <label>Admin Name:</label>
                                <Form.Field style={{width: '70%', margin: '10px'}}>
                                    <Form.Input placeholder="Name of the Admin"
                                                aria-placeholder={{color: 'purple'}}
                                                style={{width: '100%'}}
                                                value={this.state.removeadmin}
                                                onChange={this.handleRemoveName}
                                                error={!!this.state.errorRemoveMessage}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button onClick={this.onSubmitRemove} color={"purple"}>
                                        Remove
                                    </Button>
                                </Form.Field>
                            </Form.Group>
                            <Message style={buttonStyle} error header={"Error!"}
                                     content={this.state.errorRemoveMessage}/>
                        </Form>
                    </Segment>
                    <Segment inverted style={cardStyle}>
                        <label style={labelStyle}><h3>Check Admin</h3></label>
                        <Form inverted inverted className={"form-inline"} onSubmit={this.onSubmitSearch}
                              error={!!this.state.errorSearchMessage} style={formstyle}>
                            <Form.Group inline style={{width: '60%', margin: '50px auto',}}>
                                <label>Admin Name:</label>
                                <Form.Field style={{width: '70%', margin: '10px'}}>
                                    <input placeholder="Name of the Admin"
                                           aria-placeholder={{color: 'purple'}}
                                           style={{width: '100%'}}
                                           value={this.state.adminsearch}
                                           onChange={this.handleSearch}
                                           error={!!this.state.errorSearchMessage}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Button onClick={this.onSubmitSearch} color={"purple"}>
                                        <Icon color='white' name='search'/>
                                    </Button>

                                </Form.Field>
                            </Form.Group>
                            <Message style={buttonStyle} error header={"Error!"}
                                     content={this.state.errorSearchMessage}/>
                        </Form>
                        <div>{this.state.showifadmin === true ?
                            <Message info>{this.state.isAdmin === true ? 'Is an Admin' : 'Is not an Admin'}</Message>
                            : null}</div>
                    </Segment>
                    <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                    <FixedMenuLayout/>
                </div>
            );
        }
    }
}

export default ManageAdmin;