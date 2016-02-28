/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import {Table, Column, Cell } from 'fixed-data-table'; 
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import StockTable from '../StockTable'; 
import AddStockButton from '../AddStockButton'; 
import AppActions from '../../actions/appActions';
import {AppStorePopup, AppStoreNewItem} from '../../stores/appStore'; 
import AddItemModal from '../AddItemModal'; 

const getPopupState = function() {
  return {
    displayModalState: AppStorePopup.sendPopupState()
  };   
}; 

const getNewStockItem = function (){
  return {
    newStockItem: AppStoreNewItem.sendNewStockItem()
  }; 
}; 

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state =  { 
      displayModalState: false,
      content: this.props.content
    }
    this.changePopupState = this.changePopupState.bind(this);
    this.addNewStockItem = this.addNewStockItem.bind(this);
  }

changePopupState () {
    this.setState({
      displayModalState: getPopupState().displayModalState
    })
}

addNewStockItem () {
  let newItem = getNewStockItem(); 

  newItem.newStockItem.id = this.state.content.size; 
  this.state.content._cache.push(newItem.newStockItem);
  this.state.content.size++; 

  this.setState({
    content:  this.state.content
  }); 

}

componentWillMount () {
  AppStorePopup.addChangeListener(this.changePopupState);
  AppStoreNewItem.addChangeListener(this.addNewStockItem);
}

componentWillUnmount() {
    AppStorePopup.removeChangeListener(this.changePopupState);
    AppStoreNewItem.removeChangeListener(this.addNewStockItem);
}

  render() {

    let addStockModal = ''; 

    if (this.state.displayModalState === true ){
      addStockModal = <AddItemModal content={this.props.content}/>
    } else {
      addStockModal = '';  
    }

    return (
      <div className={s.root}>
        <StockTable content={this.state.content}/>
        <AddStockButton/>
        {addStockModal}
      </div>
    );
  }

}

export default withStyles(HomePage, s);
