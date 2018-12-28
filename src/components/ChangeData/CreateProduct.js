import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'
import TopHeader from '../User/AdminTopHeader';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

 
class CreateProduct extends Component {
  state = {
    ProductId: '',
    Name:'',
    Make:'',
    Price:'',
    Stock:'',
    Size:'',
    Color:'',
    Region:'',
    Season:''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProduct(this.state)
    fetch('https://localhost:5001/api/product/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: this.state.Name,
        Make: this.state.Make,
        Price: this.state.Price,
        Stock: this.state.Stock,
        Size: this.state.Size,
        Color: this.state.Color,
        Region: this.state.Region,
        Season: this.state.Season

  })
})
  }
  render() {
    return (
      <div>
      <TopHeader />
      <Container>
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new Product</h5>
          <div className="input-field">
            <label htmlFor="Name">Product Name</label>
            <input type="text" id='Name' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Make">Product Make</label>
            <input type="text" id='Make' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Price">Product Price</label>
            <input type="text" id='Price' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Stock">Product Stock</label>
            <input type="text" id='Stock' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Size">Product Size</label>
            <input type="text" id='Size' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Color">Product Color</label>
            <input type="text" id='Color' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Region">Product Region</label>
            <input type="text" id='Region' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Season">Product Season</label>
            <input type="text" id='Season' onChange={this.handleChange} />
          </div>
          {/* <div className="input-field">
            <label htmlFor="Make">Product Make</label>
            <textarea  id="Make" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div> */}
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
        <Button basic compact secondary as={NavLink} to='/'>
            <p>Home</p>
        </Button>
      </div>
      </Container>
      <Footer />
  </div>
      
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    createProduct:(product) => dispatch(createProduct(product))
  }
}

export default connect(null,mapDispatchToProps)(CreateProduct)