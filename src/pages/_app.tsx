import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stellar Learn LMS</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}