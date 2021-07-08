import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../factory';
import Distributor from '../../distributor';
import web3 from '../../web3';
import { Router } from '../../routes';

class RemoveDistributorNew extends Component {
  state = {
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .renounceDistributor()
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
        <h3>Remove Distributor</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Delete!
          </Button>
        </Form>
    </Layout>
    );
  }
}

export default RemoveDistributorNew;