import React from 'react';
import {Route } from 'react-router-dom';

import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
          <Route exact path ={`${match.url}`} component={CollectionOverView} />
          <Route exact path ={`${match.url}/:collectionId`} component={CollectionPage} />
      </div>
    )

export default ShopPage