/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import {Table, Column, Cell } from '../fixed-data-table'; 
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StockTable.scss'; 

const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col].toLocaleString()}
  </Cell>
);

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col]}
  </Cell>
);

class StockTable extends Component {
  
  render() {

    let dataList = this.props.content;

    return (
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={dataList.getSize()}
        width={1000}
        height={500}
        {...this.props}>
        <Column
          header={<Cell>Product Name</Cell>}
          cell={<TextCell data={dataList} col="name" />}
          fixed={true}
          width={200}
        />
        <Column
          header={<Cell>Product Description</Cell>}
          cell={<TextCell data={dataList} col="description" />}
          fixed={true}
          width={400}
        />
        <Column
          header={<Cell>Price</Cell>}
          cell={<TextCell data={dataList} col="price" />}
          width={100}
        />
        <Column
          header={<Cell>Taxable? </Cell>}
          cell={<DateCell data={dataList} col="taxable" />}
          width={100}
        />
        <Column
          header={<Cell>Date Available</Cell>}
          cell={<DateCell data={dataList} col="date" />}
          width={200}
        />
      </Table>
    );
  }
}

export default withStyles(StockTable, s);
