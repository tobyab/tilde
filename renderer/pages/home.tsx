import Head from "next/head";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { MagnifyingGlass, Pen } from "../components/icons"
import Nav from "../components/nav"

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
  
  ($C_L$)
  `)
  return (
    <div>
      <Head>
        <title>Tilde</title>
      </Head>
      <button
        onClick={() => setReader(setReader => !setReader)}
        className="float-right cursor-pointer m-4 bg-red-400"
      >
        {!reader && (
          <MagnifyingGlass />
        )}
        {reader && (
          <Pen />
        )}
      </button>
      <div className="flex justify-center bg-red-400 h-screen mr-8 space-x-2">
        <Nav />
        {!reader && (
          <textarea
            className="w-4/5 h-screen outline-0 cursor-text mt-16 text-lg"
            onChange={(e) => setDoc(e.target.value)}
            value={doc || ""}
            autoFocus
          />
        )}
        {reader && (
          <ReactMarkdown
            children={doc}
            remarkPlugins={[[remarkGfm, { singleTilde: true }], [remarkMath]]}
            rehypePlugins={[rehypeKatex]}
            className="w-4/5 h-screen mt-16 text-lg"
            components={{
              code({ node, inline, className, children, ...props }) {
                const resCode = /language-(\w+)/.exec(className || "")
                return !inline && resCode ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={resCode[1]}
                    pretag="div"
                    {...props}
                  />
                ) : (
                  <code  {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;

