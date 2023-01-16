import Head from 'next/head';

import ItemList from 'components/ItemList';

const Home = () => {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Todo List with gRPC-Web and Envoy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home</h1>
        <ItemList />
      </main>
    </>
  );
};

export default Home;
