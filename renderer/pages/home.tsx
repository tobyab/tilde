import Head from "next/head";
import Nav from "../components/nav";

function Home() {
  return (
    <>
      <Head>
        <title>tilde</title>
      </Head>
      <div>
        <Nav/>
      </div>
    </>
  );
}

export default Home;
