import styles from "../styles/home.module.scss";
import Head from "next/head";

import AdviceContainer from "@/components/adviceContainer/AdviceContainer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fdcc Advice Generator App</title>
        <meta name="author" content="Francesco De Caro Carella" />
        <meta
          name="title"
          property="title"
          content="Fdcc Advice Generator App"
        />
        <meta
          name="description"
          property="description"
          content="Fdcc Advice Generator App"
        />
        <meta
          name="url"
          property="url"
          content="https://fdcc-advice-generator-app.vercel.app/"
        />
        <meta
          name="site_name"
          property="site_name"
          content="Fdcc Advice Generator App | An advice generator app realized with React framework Next.js"
        />
        <meta
          property="og:url"
          content="https://fdcc-advice-generator-app.vercel.app/"
        />

        <meta
          property="og:title"
          content="Fdcc Advice Generator App | An advice generator app realized with React framework Next.js"
        />
        <meta
          property="og:description"
          content="Request: build out an advice generator app using the Advice Slip API and get it looking as close to the original design as possible. More information on Advice Generator App Challenge on Frontend Mentor."
        />
        <meta property="og:type" content="App" />
        <meta
          property="og:image"
          content="./public/img/Fdcc-Advice-Generator-App.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://fdcc-advice-generator-app.vercel.app/"
        />
        <link rel="icon" type="image/x-icon" href="./public/img/favicon.ico" />
        <link
          rel="prefetch"
          as="image"
          type="image/jpeg"
          href="./public/img/Fdcc-Advice-Generator-App.jpg"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        ></link>
      </Head>
      <main className={styles.Main}>
        <AdviceContainer />
      </main>
    </>
  );
}
