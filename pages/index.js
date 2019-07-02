import React, {Component} from 'react';
import instance from '../components/carrecord.js';
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import {Button, Container, Dropdown, Form, Icon, Image, Menu, Loader, Message, Table} from 'semantic-ui-react'
import Head from "next/head";
import FixedMenuLayout from "../components/footer";
import Link from 'next/link';
import web3 from '../components/web3';
import SimpleSnackbar from "../components/snackbar";

class Index extends Component {

    componentWillMount() {
        this.loadBlockchainData()
    }

    //verifies if an user is admin or the owner of the contract
    async loadBlockchainData() {
        let accounts = await web3.eth.getAccounts();
        this.setState({isOwner: await instance.methods.checkIfOwner(accounts[0]).call()});
        this.setState({isAdmin: await instance.methods.checkIfAdmin(accounts[0]).call()});

    }

    constructor(props) {
        super(props);
        this.state = {
            VIN: '',
            car: null,
            eventsCount: '',
            events: [],
            disableEventButton: true,
            loading: false,
            errorMessage: '',
            showTable: false,
            accounts: [],
            isOwner: false,
            isAdmin: false

        };
    }

    //upon clicking, the function returns the events of the car registered in the contract
    onClick = async event => {

        event.preventDefault();
        const {VIN} = this.state;
        this.setState({disableEventButton: true});

        this.setState({loading: true, errorMessage: ''});

        try {
            const y = await instance.methods.getEventsCount(VIN).call();
            for (let i = 0; i < y; i++) {
                const z = await instance.methods.getEvent(VIN, i).call();
                this.setState({events: [...this.state.events, z]});

            }

            this.setState({showTable: true});


        } catch (err) {
            this.setState({errorMessage: err.message});

        }
        this.setState({loading: false});
    };

    //renders an event in a table row
    renderEvents() {
        const x = this.state.VIN;
        let r = this.state.events.map(function (event) {
            return ([
                <Table.Row>
                    <Table.Cell
                        key={x}>{event[0].toString()}/{event[1].toString()}/{event[2].toString()}</Table.Cell>
                    <Table.Cell key={x}>{event[3].toString()}</Table.Cell>
                    <Table.Cell key={x}>{event[4].toString()}</Table.Cell>
                    <Table.Cell key={x}>{event[5].toString()}</Table.Cell>
                    <Table.Cell key={x}>{event[6].toString()}</Table.Cell>
                </Table.Row>

            ]);
        });
        return r;
    }

    //renders all the events in a row
    renderTables() {
        let tableStyle = {
            width: '68%',
            margin: '20px auto'
        };
        if (this.state.events && this.state.events.length) {
            return (<Table celled style={tableStyle} color={'purple'} key={'purple'} inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Mileage</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Made by</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.disableEventButton === false ? null : this.renderEvents()}
                    </Table.Body>
                </Table>
            );
        } else {
            return <Message info style={{width: '15%', margin: '30px auto'}}> This car has no events recorded </Message>
        }
    }

    //upon submitting, the function returns the basic info of a car registered in the contract
    onSubmit = async event => {
        event.preventDefault();
        const {VIN} = this.state;
        this.setState({loading: true, errorMessage: ''});
        this.setState({disableEventButton: false});
        this.setState({showTable: false});
        this.setState({events: []});
        try {
            const x = await instance.methods.getCar(VIN).call();
            if (x[0] === "") {
                this.setState({errorMessage: 'INVALID CAR'});
            }
            const g = this.state.VIN;
            if (g === '') {
                this.setState({errorMessage: 'Please fill the search form'});
            }
            // set state.car to x only if there are valid values in X
            if (x[0] !== '' && x[2] !== '' && x[3] !== '') {
                this.setState({car: x});
            }
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading: false});
    };

    //handle methods are changing the states and prevent the default behaviour
    handleChange = event => {
        event.preventDefault();
        this.setState({showTable: false});
        this.setState({VIN: event.target.value});
        this.setState({errorMessage: ''});
        this.setState({hideEvents: true});
        this.setState({car: null});
    };

    render() {
        let cardStyle = {
            display: 'block',
            width: '28%',
            margin: '7px auto',
            height: 'auto',
        };

        let formStyle = {
            width: '100%',
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
                <h1 style={{margin: '20px'}}>Car Info</h1>
                <Form className={"form-inline"} style={formStyle} onSubmit={this.onSubmit}
                      error={!!this.state.errorMessage}>
                    <Form.Group inline style={{width: '60%', margin: '150px auto'}}>
                        <label style={{fontSize: 'xx-large'}}>Search:</label>
                        <Form.Field style={{width: '90%'}}>
                            <Form.Input placeholder="VIN"
                                        aria-placeholder={{color: 'blue'}}
                                        style={{width: '100%', height: '75px', fontSize: 'large',}}
                                        value={this.state.VIN}
                                        onChange={this.handleChange}
                                        error={!!this.state.errorMessage}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button onClick={this.onSubmit}
                                    color={"purple"}
                                    style={{width: '150px', height: '75px'}}>
                                <Icon color='black' name='search'/>
                            </Button>
                        </Form.Field>
                    </Form.Group>
                    <Message style={{width: '15%', margin: '30px auto'}} error header={"Notification:"}
                             content={this.state.errorMessage}/>
                </Form>
                {(this.state.car != null && this.state.car[0] != null) ? (
                    <Card style={cardStyle}>
                        <Card.Content>
                            <Card.Header> BRAND: </Card.Header>
                            <Card.Description>{this.state.car[0]}</Card.Description>
                            <Card.Header>YEAR:</Card.Header>
                            <Card.Description>{parseInt(this.state.car[1]) >= 1 ? parseInt(this.state.car[1]) : ''}</Card.Description>
                            <Card.Header>COLOR:</Card.Header>
                            <Card.Description>{this.state.car[2]}</Card.Description>
                            <Card.Header>LICENSE:</Card.Header>
                            <Card.Description>{this.state.car[3]}</Card.Description>
                        </Card.Content>
                        <Button loading={!!this.state.loading} style={cardStyle} variant="contained" color="purple"
                                disabled={this.state.disableEventButton === true || this.state.errorMessage !== ''}
                                onClick={this.onClick}
                                disabled={this.state.loading}
                                error={!!this.state.errorMessage}>
                            Show Events
                        </Button>
                    </Card>
                ) : null}
                {this.state.showTable === true ? this.renderTables() : null}
                <FixedMenuLayout/>
                <div>{this.state.loading === true ? <SimpleSnackbar/> : null}</div>
            </div>
        );
    }
}

export default Index;