import Head from "next/head";
import Nav from "../components/nav"
import { useState, useCallback } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function Home() {
  const [doc, setDoc] = useState<string>(`
  Here is a sentace with *italics*! And, here's another with **bold** font.

  > Merry christmas, because here's one with a ~strikethrough~!
  * While we're at it, here's a list for you!
  * [x] never
  * [x] gonna
  * [x] give
  * [x] you
  * [x] up
  `)

  const handleChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="bg-red-400">
      <Head>
        <title>Tilde</title>
      </Head>
      {/*<Nav/>*/}
        <div className="flex justify-center bg-red-400 h-screen mt-16 mx-8 space-x-2">
          <textarea
            className="w-1/2 h-screen"
            onChange={(e) => setDoc(e.target.value)}
            autoFocus
          />
          <ReactMarkdown 
            children={doc} 
            remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
            className="w-1/2"
          />
        </div>
    </div>
  );
}

export default Home;
