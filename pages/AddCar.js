import React, {Component} from 'react';
import instance from '../components/carrecord.js';
import Head from "next/head";
import {Button, Container, Dropdown, Form, Image, Menu, Message, Segment} from "semantic-ui-react";
import web3 from "../components/web3.js"
import Link from 'next/link';
import FixedMenuLayout from "../components/footer";
import SimpleSnackbar from "../components/snackbar";

class AddCar extends Component {
    componentWillMount() {
        this.loadBlockchainData()
    }

    //verifies if an user is admin or the owner of the contract
    async loadBlockchainData() {
        let accounts = await web3.eth.getAccounts();
        this.setState({isOwner: await instance.methods.checkIfOwner(accounts[0]).call()});
        this.setState({isAdmin: await instance.methods.checkIfAdmin(accounts[0]).call()});

    }

    state = {
        VIN: '',
        brand: '',
        year: '',
        color: '',
        license: '',
        loading: false,
        errorMessage: '',
        isOwner: false,
        isAdmin: false
    };

    //upon submitting, the function calls the addCar method of the contract
    onSubmit = async event => {
        try {
            event.preventDefault();
            this.setState({accounts: await web3.eth.getAccounts()});


            if (this.state.year >= 1900 && this.state.year <= 2019) {
                if (this.state.VIN === '' || this.state.brand === '' || this.state.year === '' || this.state.color === '' || this.state.license === '') {
                    this.setState({errorMessage: "Fields can't be empty"});
                } else {
                    this.setState({loading: true, errorMessage: ''});
                    await instance.methods.addCar(this.state.VIN, this.state.brand, this.state.year, this.state.color, this.state.license).send({
                        from: this.state.accounts[0]
                    });
                }

            } else {
                this.setState({errorMessage: "Invalid year"});
                this.setState({loading: false});
            }
        } catch (err) {
            this.setState({errorMessage: err.message});
            if (err.message.includes('User denied')){
                this.setState({  errorMessage: "Transaction Canceled" });
            }

        }
    };

    //handle methods are changing the states and prevent the default behaviour
    handleAddVIN = event => {
        event.preventDefault();
        this.setState({VIN: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddBrand = event => {
        event.preventDefault();
        this.setState({brand: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddColor = event => {
        event.preventDefault();
        this.setState({color: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddLicense = event => {
        event.preventDefault();
        this.setState({license: event.target.value});
        this.setState({errorMessage: ''});
    };
    handleYear = event => {
        event.preventDefault();
        this.setState({year: event.target.value});
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

        return (
            <div>
                <div>
                    <Menu fixed='top' inverted>
                        <Container textAlign='center'>
                            <Link href="/index">
                                <Menu.Item as='a' header style={{margin: '3px'}}>
                                    <Image size='normal' src='https://img.icons8.com/cotton/75/000000/retro-car.png'
                                           style={{marginleft: '1.5em'}}/>
                                    <h2 style={{margin: '5px'}}>Car Record</h2>
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
                    <h2 style={{margin: '12px auto'}}> Add Car </h2>
                    <Form inverted className={"form-inline"} onSubmit={this.onSubmit}
                          error={!!this.state.errorMessage} style={formStyle}>
                        <Form.Group inline style={{width: '90%', margin: '30px auto'}}>
                            <Form.Field required style={{width: '70%', margin: '10px'}}>
                                <Form.Input fluid label="VIN" placeholder="VIN of the car..."
                                            style={{width: '100%'}}
                                            value={this.state.VIN}
                                            onChange={this.handleAddVIN}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input fluid label="BRAND:" placeholder="brand of the car"
                                            style={{width: '96.555%'}}
                                            value={this.state.brand}
                                            onChange={this.handleAddBrand}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input fluid label="COLOR:" placeholder="color of the car"
                                            style={{width: '96.555%'}}
                                            value={this.state.color}
                                            onChange={this.handleAddColor}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input fluid label="LICENSE:" placeholder="License"
                                            style={{width: '96.555%'}}
                                            value={this.state.license}
                                            onChange={this.handleAddLicense}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input label="YEAR:"
                                            style={{width: '90.555%'}}
                                            value={parseInt(this.state.year)}
                                            onChange={this.handleYear}
                                            placeholder="Enter year of the car"
                                            type="number"
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button onClick={this.onSubmit} color={"purple"} disabled={this.state.loading}>
                                    Submit
                                </Button>
                            </Form.Field>
                        </Form.Group>
                        <Message style={buttonStyle} error header={"Notification:"} content={this.state.errorMessage}/>
                    </Form>
                </Segment>
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default AddCar



