/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import StockTable from './components/StockTable';
import FakeObjectDataListStore from './components/fixed-data-table/examples/helpers/FakeObjectDataListStore'; 

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/', async (state) => {
      const content = new FakeObjectDataListStore(20);
      return content && <HomePage content={content} />;
  });  

  on('/', async () => <HomePage />);

  // on('/', async () => <StockTable />);

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
