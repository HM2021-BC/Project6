import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import Producer from '../../producer';
import web3 from '../../web3';
import { Router } from '../../routes';

class PurchaseNew extends Component {
  state = {
    uint: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .purchaseItem(this.state.uint)
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
        <h3>Purchase</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Enter Product Number</label>
            <Input
              value={this.state.uint}
              onChange={event =>
                this.setState({ uint: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Purchase Item!
          </Button>
        </Form>
    </Layout>
    );
  }
}

export default PurchaseNew;
