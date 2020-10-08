import Head from "next/head";
import Footer from "./_footer";
import styles from "../styles/Home.module.css";
import Comic from "./_comic";
import Header from "./_header"

export default function Home(props) {
  function make_url(comic_number) {
    if (comic_number == null) {
      return "https://xkcd.com/info.0.json";
    } else {
      return `https://xkcd.com/${comic_number}/info.0.json`;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Knockoff XKCD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Comic metadata={props.comic} />

      <Footer comic_number={props.comic.num} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("http://xkcd.com/info.0.json");
  const comic = await response.json();
  return {
    props: {
      comic,
    }, // will be passed to the page component as props
  };
}
