/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AddStockButton.scss';
import AppActions from '../../actions/appActions';

class AddStockButton extends Component {

    handleClick = event => {
        AppActions.displayPopup(event);
    }


  render() {
    return (
      <button className={s.root} onClick={this.handleClick.bind(this, true)}>Add Stock</button>
    );
  }

}

export default withStyles(AddStockButton, s);
