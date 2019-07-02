import React, {Component} from 'react';
import instance from '../components/carrecord.js';
import Head from "next/head";
import {Button, Container, Dropdown, Form, Image, Menu, Message, Segment, TextArea} from "semantic-ui-react";
import web3 from "../components/web3.js"
import Link from 'next/link';
import FixedMenuLayout from "../components/footer";
import SimpleSnackbar from "../components/snackbar";

class AddEvent extends Component {
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
        day: '',
        month: '',
        year: '',
        type: '',
        mileage: '',
        desc: '',
        loading: false,
        errorMessage: '',
        isOwner: false,
        isAdmin: false
    };

    //upon submitting, the function calls the add method of the contract

    onSubmit = async event => {
        if (this.state.VIN === '' || this.state.day === '' || this.state.month === '' || this.state.year === '' || this.state.type === '' || this.state.mileage === '' || this.state.desc === '') {
            this.setState({errorMessage: "Fields can't be empty"});
        } else if (this.state.day > 31 || this.state.day < 1) {
            this.setState({errorMessage: "Invalid day"});
        } else if (this.state.month > 12 || this.state.month < 1) {
            this.setState({errorMessage: "Invalid month"});
        } else if (this.state.year > 2040 || this.state.year < 2019) {
            this.setState({errorMessage: "Invalid year"});
        } else if (this.state.errorMessage === '') {
            event.preventDefault();
            this.setState({accounts: await web3.eth.getAccounts()});
            this.setState({loading: true, errorMessage: ''});
            await instance.methods.addEvent(this.state.VIN, this.state.day, this.state.month, this.state.year, this.state.type, this.state.mileage, this.state.desc).send({
                from: this.state.accounts[0]
            });
        }
    };

    //handle methods are changing the states and prevent the default behaviour
    handleAddVIN = event => {
        event.preventDefault();
        this.setState({VIN: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddDay = event => {
        event.preventDefault();
        this.setState({day: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddMonth = event => {
        event.preventDefault();
        this.setState({month: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddYear = event => {
        event.preventDefault();
        this.setState({year: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddMileage = event => {
        event.preventDefault();
        this.setState({mileage: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddType = event => {
        event.preventDefault();
        this.setState({type: event.target.value});
        this.setState({errorMessage: ''});
    };

    handleAddDesc = event => {
        event.preventDefault();
        this.setState({desc: event.target.value});
        this.setState({errorMessage: ''});
    };

    render() {
        let formStyle = {
            display: 'block',
            width: '23%',
            margin: '200px auto',
            height: 'auto',
        };

        let buttonStyle = {
            margin: '4px'
        };

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
                <Segment inverted textAlign='center' style={formStyle}>
                    <h1 style={{margin: '12px auto'}}> Add Event </h1>
                    <Form inverted onSubmit={this.onSubmit}
                          style={{margin: '30px auto'}}
                          error={!!this.state.errorMessage}>
                        <Form.Group inline style={{width: '90%', margin: '30px auto', float: 'right'}}>
                            <Form.Field required style={{width: '70%', margin: '10px'}}>
                                <Form.Input fluid label="VIN" placeholder="VIN of the car..."
                                            style={{width: '100%'}}
                                            value={this.state.VIN}
                                            onChange={this.handleAddVIN}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input fluid label="Mileage:" placeholder="brand of the car"
                                            style={{width: '96.555%'}}
                                            value={parseInt(this.state.mileage)}
                                            onChange={this.handleAddMileage}
                                            error={!!this.state.errorMessage}
                                            type="number"
                                            min={1}
                                />
                                <Form.Input fluid label="Event Type:" placeholder="color of the car"
                                            style={{width: '96.555%'}}
                                            value={this.state.type}
                                            onChange={this.handleAddType}
                                            error={!!this.state.errorMessage}
                                />
                                <Form.Input fluid label="Short Description:" placeholder="License"
                                            control={TextArea}
                                            style={{width: '96.555%'}}
                                            value={this.state.desc}
                                            onChange={this.handleAddDesc}
                                            error={!!this.state.errorMessage}
                                />
                                <br/>
                                <h4>Date:</h4>
                                <Form.Group inline widths="equal" style={{width: '21%'}}>
                                    <Form.Field style={{margin: '20%'}}>
                                        <Form.Input label="day:"
                                                    style={{width: '100px'}}
                                                    value={parseInt(this.state.day)}
                                                    onChange={this.handleAddDay}
                                                    placeholder="Enter year of the car"
                                                    type="number"
                                                    min={1} max={31} step={1}
                                        />
                                        <Form.Input label="month:"
                                                    style={{width: '100px'}}
                                                    value={parseInt(this.state.month)}
                                                    onChange={this.handleAddMonth}
                                                    placeholder="Enter year of the car"
                                                    type="number"
                                                    min={1} max={12} step={1}
                                        />
                                        <Form.Input label="year:"
                                                    style={{width: '100px'}}
                                                    value={parseInt(this.state.year)}
                                                    onChange={this.handleAddYear}
                                                    placeholder="Enter year of the car"
                                                    type="number"
                                                    min={2019} max={2040} step={1}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form.Field>
                        </Form.Group>
                        <Form.Field>
                            <Button onClick={this.onSubmit} color={"purple"}>
                                Make Changes
                            </Button>
                        </Form.Field>
                        <Message style={buttonStyle} error header={"Notification:"} content={this.state.errorMessage}/>
                    </Form>
                </Segment>
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
                <FixedMenuLayout/>
            </div>
        );
    }
}

export default AddEvent



