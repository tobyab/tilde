import Head from "next/head";
import Nav from "../components/nav";
import Editor from "../components/editor"
import { Preview } from "../components/preview"
import { useState, useCallback } from "react"

function Home() {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')
  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <>
      <Head>
        <title>Tilde</title>
      </Head>
      <div>
        <Nav/>
        {/*
        <Editor onUpdate={handleDocChange} initalUpdate={doc} />
        */}
      </div>
    </>
  );
}

export default Home;
