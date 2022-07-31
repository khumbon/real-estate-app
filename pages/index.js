import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Khumbo's Real Estate app" key="title" />
        <link
          rel="icon"
          href="https://play-lh.googleusercontent.com/7bV6yAYud_PvKqgoVJz-LaR9zPtv-26jTc2Nx8Lfd4__xm8c2gA13CX5FxJAfWGVa4c"
        />
      </Head>
    </div>
  );
}
