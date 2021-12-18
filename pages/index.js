import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useState } from "react";

export default function Home() {
  const [button, setButton] = useState(false);
  const [text, setText] = useState("");

  const btn = () => {
    if (button == true) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  return (
    <div className="container">
      <Head>
        <title>Welcome, Kaisei!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        onClick={() => {
          btn();
        }}
        className="description"
      >
        click
      </button>
      <main>
        {button == true && (
          <>
            <Header title="Welcome Kaisei" />
            <p className="description">Let's get started!</p>
          </>
        )}
      </main>
    </div>
  );
}
