import React, { Component } from 'react'
import { Grid, Image, Card, CardContent, Icon, Divider } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import ProductImageSlider from './ProductImageSlider';

export default class GridExampleRelaxed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  
  componentDidMount() {
    fetch('https://localhost:5001/api/product')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }
  
  render() {

    var { isLoaded, items, images } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    if (items && (items.length = 5)) {
      return (
        <Grid>
          <Grid.Row columns={5} centered relaxed>
            {items.map(item => (
              <Grid.Column key={item.productId}>
                <Link to= {'/product' + item.productId}>
                  <Card href='#card-example-link-card' color='teal'>
                      <Image src= {item.images[0].url} />
                    <CardContent>
                      <Card.Header><Icon name='euro sign' />{item.price}</Card.Header>
                      <Card.Meta>{item.name}</Card.Meta>
                    </CardContent>
                  </Card>
                  <Divider hidden />
                </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )
    } else {
      return <div>No items found</div>
    }
  }
}