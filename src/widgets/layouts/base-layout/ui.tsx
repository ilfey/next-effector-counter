import React from 'react';
import {Seo} from './seo';
import "./styles.scss"

type Props = {
  children: React.ReactNode
}

export const BaseLayout = ({children}: Props) => {
  return (
    <>
      <Seo/>
      <div className="wrapper">
        <main className="">
          {children}
        </main>
      </div>
    </>
  );
};
