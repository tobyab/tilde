import Head from "next/head";
import Nav from "../components/nav";
import { useState, useCallback } from "react"
import Editor from "../components/editor"

function Home() {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')
  const handleChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <>
      <Head>
        <title>Tilde</title>
      </Head>
      <div>
        <Nav/>
        <Editor initalUpdate={setDoc} onUpdate={handleChange} />
      </div>
    </>
  );
}

export default Home;
