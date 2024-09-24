import React from 'react';
import {useGate, useUnit} from "effector-react";
import {homeModel} from "pages/home/model";
import "./styles.scss"

export const HomePage = () => {
  useGate(homeModel.HomeGate)

  const {$count, increment, decrement} = useUnit({
    $count: homeModel.$count,
    increment: homeModel.increment,
    decrement: homeModel.decrement,
  })

  return (
    <div className="">
      <h1 className="page-title">Next Effector Counter</h1>

      <div className="counter">
        <h2 className="counter__title">Count: {$count}</h2>

        <div className="counter__actions-container">
          <button className="button primary"
                  onClick={decrement}>
            Decrement
          </button>

          <button className="button primary"
                  onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};
