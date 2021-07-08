import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import Producer from '../../producer';
import web3 from '../../web3';
import { Router } from '../../routes';

class ItemShow extends Component {
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
      let item = await factory.methods
        .fetchItemBufferOne(this.state.uint).call({
          from: accounts[0]
        });
      let item2 = await factory.methods
      .fetchItemBufferTwo(this.state.uint).call({
        from: accounts[0]
      });
      alert(JSON.stringify(item) + JSON.stringify(item2));
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Productinformation</h3>
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
            Show!
          </Button>
          
        </Form> 
    </Layout>
    );
  }
}

export default ItemShow;
