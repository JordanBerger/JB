import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Container } from 'reactstrap';
import Nav from 'components/nav';
import 'custom.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Disable console logs in prod
  process.env.NODE_ENV === 'production' && (console.log = (): void => {});

  return (
    <>
      <Head>
        <title>Jordan Berger Portfolio</title>
      </Head>
      <Container fluid>
        <Nav />
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default App;

export const reportWebVitals = (metric): void => {
  process.env.NEXT_PUBLIC_LOG_METRICS == 'true' &&
    console.log(`${metric.name}: ${metric.value}`);
};
