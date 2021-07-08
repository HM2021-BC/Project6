import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import web3 from '../../web3';
import { Router } from '../../routes';

class RegisterNew extends Component {
  state = {
    uint: '',
    farmerAddress: '',
    farmerName: '',
    farmlat: '',
    productInfo: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerItem(this.state.uint, this.state.farmerAddress, this.state.farmerName, this.state.farmInfo, this.state.farmlat, this.state.farmlong, this.state.productInfo)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Register Production</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Enter Product Number</label>
            <Input
              value={this.state.uint}
              onChange={event =>
                this.setState({ uint: event.target.value })}
            />
            <label>Enter Origin Factory Address</label>
            <Input
              value={this.state.farmerAddress}
              onChange={event =>
                this.setState({ farmerAddress: event.target.value })}
            />
            <label>Enter Responsible Persons Name</label>
            <Input
              value={this.state.farmerName}
              onChange={event =>
                this.setState({ farmerName: event.target.value })}
            />
            <label>Enter Factoryname</label>
            <Input
              value={this.state.farmInfo}
              onChange={event =>
                this.setState({ farmInfo: event.target.value })}
            />
            <label>Enter Factory Location</label>
            <Input
              value={this.state.farmlat}
              onChange={event =>
                this.setState({ farmlat: event.target.value })}
            />
            <label>Enter Factory Housenumber</label>
            <Input
              value={this.state.farmlong}
              onChange={event =>
                this.setState({ farmlong: event.target.value })}
            />
            <label>Enter Productinformation</label>
            <Input
              value={this.state.productInfo}
              onChange={event =>
                this.setState({ productInfo: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Register!
          </Button>
        </Form>
    </Layout>
    );
  }
}

export default RegisterNew;
