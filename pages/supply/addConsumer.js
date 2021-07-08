import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import Consumer from '../../consumer';
import web3 from '../../web3';
import { Router } from '../../routes';

class ConsumerNew extends Component {
  state = {
    consumerAddress: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .addConsumer(this.state.consumerAddress)
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
        <h3>Add Consumer</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Add this Address as Consumer</label>
            <Input
              value={this.state.consumerAddress}
              onChange={event =>
                this.setState({ consumerAddress: event.target.value })}
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

export default ConsumerNew;
