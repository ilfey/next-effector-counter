import React from 'react';
import {useGate, useUnit} from "effector-react";
import {homeModel} from "pages/home/model";
import styles from "./styles.module.css"
import {clsx} from "clsx";

export const HomePage = () => {
  useGate(homeModel.HomeGate)

  const {$count, increment, decrement} = useUnit({
    $count: homeModel.$count,
    increment: homeModel.increment,
    decrement: homeModel.decrement,
  })

  return (
    <div className="">
      <h1 className={styles.pageTitle}>Next Effector Counter</h1>

      <div className={styles.counter}>
        <h2 className={styles.counterTitle}>Count: {$count}</h2>

        <div className={styles.counterActionsContainer}>
          <button className={clsx(styles.button, styles.primary)}
                  onClick={decrement}>
            Decrement
          </button>

          <button className={clsx(styles.button, styles.primary)}
                  onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};
