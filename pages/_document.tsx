import React from 'react';
import {Html, Head, Main, NextScript} from "next/document";
import {fontSans} from "app";

export default () => (
  <Html lang="en">
    <Head/>
    <body className={`${fontSans.variable} bg-surface text-on-surface font-sans`}>
    <Main/>

    <NextScript/>
    </body>
  </Html>
);
