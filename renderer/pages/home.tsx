import Head from "next/head";
import Nav from "../components/nav"
import { useState, useReducer, useCallback } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function Home() {
  const [reader, setReader] = useState(false)
  const [doc, setDoc] = useState<string>(`
  Here is a sentence with *italics*! And, here's another with **bold** font.

  > Happy birthday, because here's one with a ~strikethrough~!
  * While we're at it, here's a list for you!
  * [x] never
  * [x] gonna
  * [x] give
  * [x] you
  * [x] up
  `)

  return (
    <div>
      <Head>
        <title>Tilde</title>
      </Head>
      {/*<Nav/>*/}
      <button
          onClick={() => setReader(setReader => !setReader)}
          className="float-right"
        >
        Click me!
      </button>
        <div className="flex justify-center bg-red-400 h-screen mt-16 mx-8 space-x-2">
          {!reader &&(
            <textarea
              className="w-screen h-screen"
              onChange={(e) => setDoc(e.target.value)}
              value={doc || ""}
              autoFocus
            />
          )}
          {reader && (
            <ReactMarkdown 
              children={doc} 
              remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
              className="w-screen"
            />
          )}
        </div>
    </div>
  );
}

export default Home;
