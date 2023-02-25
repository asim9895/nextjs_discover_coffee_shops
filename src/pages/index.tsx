import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/Banner";
import { useState } from "react";

const Home = () => {
  const [button_state, setbutton_state] = useState("View nearby coffee shops");
  const onClickButton = () => {
    setTimeout(() => {
      setbutton_state("loading.....");
    }, 2000);
    setbutton_state("View nearby stores");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText={button_state} onClickButton={onClickButton} />
      </main>
    </>
  );
};

export default Home;
