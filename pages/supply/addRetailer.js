import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import Retailer from '../../retailer';
import web3 from '../../web3';
import { Router } from '../../routes';

class RetailerNew extends Component {
  state = {
    retailerAddress: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .addRetailer(this.state.retailerAddress)
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
        <h3>Add Retailer</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Add this Address as Retailer</label>
            <Input
              value={this.state.retailerAddress}
              onChange={event =>
                this.setState({ retailerAddress: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Add!
          </Button>
        </Form>
    </Layout>
    );
  }
}

export default RetailerNew;
