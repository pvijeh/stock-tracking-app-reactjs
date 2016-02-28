/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import DatePicker from 'react-datepicker'; 
import moment from 'moment'; 
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AddItemModal.scss';
import AppActions from '../../actions/appActions';

const getInitialValues = function (){
    
    return {
        name: '',
        description: '',
        price: '',
        taxable: '', 
        date: moment() 
    }; 

}

class AddItemModal extends Component {
    constructor (props) {
    super(props)
    this.state =  { 
      newStockItem: getInitialValues(),
    }
  }

  closeModal = event => {
    AppActions.displayPopup(event);
  }

  handleInputChange = event =>{

    // sanitize html 
    function encodeHTML(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    }

    let inputValue = encodeHTML(event.target.value), 
    targKey = event.target.name, 
    tempObj = this.state.newStockItem; 

    // switch statement for validation purposes 

    switch (event.target.name) {
        
        // make sure input is a number 
        case 'price':             
            if (isNaN(inputValue) || inputValue == '') {
                tempObj[targKey] = '';       
            } else {
                tempObj[targKey] = parseInt(inputValue, 10);       
            }
            break; 
        // make sure input is boolean
        case 'taxable':             
            tempObj[targKey] = inputValue === 'true';        
            break; 
        default:
            tempObj[targKey] = inputValue; 
            break; 
    }

    this.setState({
        newStockItem: tempObj 
    });

  } // close handleInputChange method 

  handleDateChange = event => {
    let tempDate = (()=> {return this.state.newStockItem})(); 
    tempDate.date = event; 

    this.setState({
        newStockItem: tempDate
    }); 

  }

  onClickAddNewItem = event => {
    let newItem = this.state.newStockItem; 

    // see if the fields have been filled out 
    
    if (newItem.name === '' ){
        alert('Please input a name value');
    } else if (newItem.description === '' ){
        alert('Please input a description value');
    } else if (newItem.price === ''){
        alert('Please input a price');
    } else if (newItem.taxable === '') {
        alert('Please select taxability');
    } else {

        // send the form data to the store 
        AppActions.addNewStockItem(this.state.newStockItem);    
        
     //   clear form data  to make way for additional item
        this.setState({
            newStockItem: getInitialValues()
        })
        
    }
  }

  render() {
    let buttonActiveCSS = this.state.newStockItem.taxable; 

    return (
      <div className={s.root}>
          <div className={s.modal}>
            <button className={s.closeModal} onClick={this.closeModal.bind(this, false)}>&#10005;</button>
            <label>
                <span>{'Product Name'}</span>
                <input name={'name'} value={this.state.newStockItem.name} onChange={this.handleInputChange}/>
            </label>
            <label>
                <span>{'Product Description'}</span>
                <input name={'description'} value={this.state.newStockItem.description} onChange={this.handleInputChange}/>
            </label>
            <label>
                <span>{'Price'}</span>
                <input name={'price'} value={this.state.newStockItem.price} onChange={this.handleInputChange}/>
            </label>
            <label>
                <span>{'Taxable?'}</span>
                <button name={'taxable'} value={true} className={s.selectButton+' ' +
                 (()=>{if (buttonActiveCSS === true ) return s.selectButton_active})() } onClick={this.handleInputChange} >True</button>
                <button name={'taxable'} value={false} className={s.selectButton+' '+
                (()=>{if (buttonActiveCSS === false ) return s.selectButton_active})() 
                } onClick={this.handleInputChange}>False</button>
            </label>
            <label>
                <span>{'Date Available'}</span>
                <DatePicker selected={this.state.newStockItem.date} onChange={this.handleDateChange}/>
            </label>
            <button className={s.addNewStockItemButton} onClick={this.onClickAddNewItem}>Add New Stock Item</button> 
          </div>
      </div>
    );
  }

}

export default withStyles(AddItemModal, s);
