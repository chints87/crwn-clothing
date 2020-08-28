import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import './collection-item.scss'
import { addItem } from '../../redux/cart/cart-action';

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
      <CustomButton className="custom-button" inverted onClick={() => addItem(item)}>      
        Add to cart
      </CustomButton>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);