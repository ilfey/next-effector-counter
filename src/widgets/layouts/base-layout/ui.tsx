import React from 'react';
import {Seo} from './seo';
import styles from "./styles.module.css"

type Props = {
  children: React.ReactNode
}

export const BaseLayout = ({children}: Props) => {
  return (
    <>
      <Seo/>
      <div className={styles.wrapper}>
        <main className="">
          {children}
        </main>
      </div>
    </>
  );
};
