import React, {Component} from 'react';
import instance from '../components/carrecord.js';
import Head from "next/head";
import {Button, Card, Container, Dropdown, Form, Icon, Image, Menu, Message, Segment} from "semantic-ui-react";
import web3 from "../components/web3.js"
import Link from 'next/link';
import FixedMenuLayout from "../components/footer";
import SimpleSnackbar from "../components/snackbar";

class ModifyCar extends Component{
    componentWillMount(){
        this.loadBlockchainData()
    }

    async loadBlockchainData() {
        let accounts = await web3.eth.getAccounts();
        this.setState({isOwner: await instance.methods.checkIfOwner(accounts[0]).call()});
        this.setState({isAdmin: await instance.methods.checkIfAdmin(accounts[0]).call()});

    }
    state = {
        VIN: '',
        color: '',
        license: '',
        loading: false,
        errorMessage:'',
        isOwner: false,
        isAdmin: false
    };

    onSubmit = async event => {



    try {
        event.preventDefault();
        this.setState({accounts: await web3.eth.getAccounts()});
        this.setState({loading: true, errorMessage: ''});
        if  (this.state.VIN === '' || this.state.color === '' || this.state.license === '') {
            this.setState({errorMessage: "Fields can't be empty"});
        }
        else {
            await instance.methods.changeCarInfo(this.state.VIN, this.state.color, this.state.license).send({
                from: this.state.accounts[0]
            });
        }

    } catch (err) {
        this.setState({errorMessage: err.message});
    }

    this.setState({loading: false});
};

    handleChangeColor = event => {
        event.preventDefault();
        this.setState({color: event.target.value});
        this.setState({errorMessage: ''});
    };


    handleChangeLicense = event => {
        event.preventDefault();
        this.setState({license: event.target.value});
        this.setState({errorMessage: ''});
    };
    handleVIN = event => {
        event.preventDefault();
        this.setState({VIN: event.target.value});
        this.setState({errorMessage: ''});
    };

    render() {
        let cardStyle = {
            display: 'block',
            width: '28%',
            margin: '200px auto',
            height: 'auto',
        };

        let formStyle = {
            width: '100%',

        };
        let buttonStyle = {
            margin: '4px'
        };

        let labelStyle = {
            margin: '10px'
        };
        return(

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
                        {this.state.isOwner === false ? null :
                            <Menu.Item><Link href="/ManageAdmin">Manage Admin</Link></Menu.Item>
                        }
                        {this.state.isAdmin === false ? null :
                            <Dropdown item simple text='Manage Cars' disabled={this.props.admin}>
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
                        }

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

>


            <Segment inverted textAlign='center' style={cardStyle}>
                <h2  style={{margin: '12px auto'}}> Modify Car </h2>
                <Form inverted className={"form-inline"} onSubmit={this.onSubmit}
                      error={!!this.state.errorMessage} style={formStyle}>
                    <Form.Group inline style={{width: '90%', margin: '30px auto'}}>

                        <Form.Field required style={{width: '70%', margin: '10px'}}>


                            <Form.Input fluid label="VIN" placeholder="VIN of the car..."
                                        aria-placeholder={{color: 'purple'}}
                                        style={{width: '100%'}}
                                        value={this.state.address}
                                        onChange={this.handleVIN}
                                        error={!!this.state.errorMessage}
                            />


                            <Form.Input fluid label="New Color:" placeholder="Color of the car"
                                        aria-placeholder={{color: 'purple'}}
                                        style={{width: '96.555%'}}
                                        value={this.state.name}
                                        onChange={this.handleChangeColor}
                                        error={!!this.state.errorMessage}
                            />


                            <Form.Input fluid label="New License:" placeholder="License"
                                        aria-placeholder={{color: 'purple'}}
                                        style={{width: '96.555%'}}
                                        value={this.state.name}
                                        onChange={this.handleChangeLicense}
                                        error={!!this.state.errorMessage}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button  onClick={this.onSubmit} color={"purple"}>
                                Make Changes
                            </Button>
                        </Form.Field>
                    </Form.Group>
                    <Message style={buttonStyle} error header={"Error!"} content={this.state.errorMessage}/>
                </Form>
            </Segment>





            <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>

            <FixedMenuLayout/>

        </div>

    );
    }

}

export default ModifyCar



