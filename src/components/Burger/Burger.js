import React from 'react';
import BurgerIndegrient from './BurgerIngreient/BurgerIngreient';
import classes from './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => <BurgerIndegrient key={igKey + index} type={igKey} />)
    }).reduce((arr, el) => {
      return arr.concat(el)
  }, []);
  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIndegrient type="bread-top"/>
      {transformedIngredients}
      <BurgerIndegrient type="bread-bottom"/>
    </div>
  );
};



export default burger;