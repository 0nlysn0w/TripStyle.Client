import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import SearchExampleStandard from '../SearchBar';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';
import Login from '../Login';


export default class TopHeader extends Component {
    displayName = TopHeader.name

  render() {
    return (
        <Menu borderless size='massive' color='blue' inverted>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/'>
                    <h1>TripStyle</h1>
                </Button>
            </MenuItem>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/admin/create'>
                    <h1>Create Product</h1>
                </Button>
            </MenuItem>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/admin/delete'>
                    <h1>Delete Product</h1>
                </Button>
            </MenuItem>
            <MenuItem position='center'>
                <SearchExampleStandard></SearchExampleStandard>
            </MenuItem>
            <MenuItem className="Login" position='right'>
                    <Login />
                </MenuItem>
            <MenuItem>
            </MenuItem>
        </Menu>
    );
  }
}