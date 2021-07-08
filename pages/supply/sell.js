import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import Producer from '../../producer';
import web3 from '../../web3';
import { Router } from '../../routes';

class SellNew extends Component {
  state = {
    uint: '',
    price: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .sellItem(this.state.uint, this.state.price)
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
        <h3>Sell</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Enter Product Number</label>
            <Input
              value={this.state.uint}
              onChange={event =>
                this.setState({ uint: event.target.value })}
            />
            <label>State Price</label>
            <Input
              value={this.state.price}
              onChange={event =>
                this.setState({ price: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Sell Item!
          </Button>
        </Form>
    </Layout>
    );
  }
}

export default SellNew;
