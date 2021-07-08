import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class SupplyIndex extends Component {

  render() {
    return (
      <Layout>
        <div>
        <Card>
          <Card.Content>
             <Card.Header>Producer</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link route="/supply/addProducer">
             <a>
                <Button
                  floated="right"
                  content="Add Producer"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/removeProducer">
            <a>
                <Button
                  floated="right"
                  content="Remove Producer"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/register">
            <a>
                <Button
                  floated="left"
                  content="1. Register Product"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/process">
            <a>
                <Button
                  floated="left"
                  content="2. Process Product"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/pack">
            <a>
                <Button
                  floated="left"
                  content="3. Pack Product"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/sell">
            <a>
                <Button
                  floated="right"
                  content="4. Sell Product"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/ship">
            <a>
                <Button
                  floated="right"
                  content="6. Ship Product"
                  primary
                />
            </a>
            </Link>
          </Card.Content>
         </Card>
          </div>
          <div>
          <Card>
          <Card.Content>
             <Card.Header>Distributor</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link route="/supply/addDistributor">
             <a>
                <Button
                  floated="right"
                  content="Add Distributor"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/removeDistributor">
            <a>
                <Button
                  floated="right"
                  content="Remove Distributor"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/buy">
             <a>
                <Button
                  floated="right"
                  content="5. Buy Item"
                  primary
                />
            </a>
            </Link>
          </Card.Content>
         </Card>
          </div>
          <div>
          <Card>
          <Card.Content>
             <Card.Header>Retailer</Card.Header>
          </Card.Content>
          <Card.Content extra>
          <Link route="/supply/addRetailer">
             <a>
                <Button
                  floated="right"
                  content="Add Retailer"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/removeRetailer">
            <a>
                <Button
                  floated="right"
                  content="Remove Retailer"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/receive">
            <a>
              <Button
                floated="right"
                content="7. Receive Item"
                primary
              />
            </a>
          </Link>
          </Card.Content>
         </Card>
          </div>
          <div>
          <Card>
          <Card.Content>
             <Card.Header>Consumer</Card.Header>
          </Card.Content>
          <Card.Content extra>
          <Link route="/supply/addConsumer">
             <a>
                <Button
                  floated="right"
                  content="Add Consumer"
                  primary
                />
            </a>
            </Link>
            <Link route="/supply/removeConsumer">
            <a>
                <Button
                  floated="right"
                  content="Remove Consumer"
                  primary
                />
            </a>
            </Link>
          <Link route="/supply/purchase">
            <a>
              <Button
                floated="right"
                content="8. Purchase Item"
                primary
              />
            </a>
          </Link>
          </Card.Content>
         </Card>
        </div>
        <div>
          <Card>
          <Card.Content>
             <Card.Header>Product</Card.Header>
          </Card.Content>
          <Card.Content extra>
          <Link route="/supply/itemInfo">
            <a>
              <Button
                floated="right"
                content="Get Info"
                primary
              />
            </a>
          </Link>
          </Card.Content>
         </Card>
        </div>
      </Layout>
    );
  }
}

export default SupplyIndex;
