import React from 'react';

const Coin = ({name, icon, price, symbol}) => {
  return (
  <div className='coin'>
    <h1>Name: {name}</h1>
    <img src={icon} alt=''/>
    <h3>Price: {price.toFixed(5)}</h3>
    <h3>Symbol: {symbol}</h3>
  </div>);
};

export default Coin;
