import Head from "next/head"
import { useState } from "react"
import ClickAwayListener from 'react-click-away-listener'
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import Drawer from "../components/drawer"
import { Dots, MagnifyingGlass, Pen, Save, Add } from "../components/icons"

function Home() {
  const [reader, setReader] = useState(false)
  const [showDraw, setShowDraw] = useState(false)
  const [docName, setDocName] = useState("Untitled")
  const [doc, setDoc] = useState<string>(``)

  const save = () => {
    let md = localStorage.setItem(docName,
      JSON.stringify({
        doc
      })
    )
  }

  const createNote = () => {
    localStorage.setItem(docName, "newDoc")
    return (
      <form>
        <input
          onChange={(e) => setDocName(e.target.value)}
          value="Untitled"
        />
      </form>
    )
  }

  return (
    <div>
      <Head>
        <title>Tilde</title>
      </Head>
      <div className="float-right m-6 space-x-4">
      <button
          onClick={() => save()}
        >
          <Save/>
      </button>
        <button
          onClick={() => setReader(setReader => !setReader)}
          className="cursor-pointer"
        >
          {!reader && (
            <MagnifyingGlass />
          )}
          {reader && (
            <Pen />
          )}
        </button>
        
        <button
          onClick={() => setShowDraw(true)}
        >
          <Dots />
        </button>

        {showDraw && (
          <ClickAwayListener onClickAway={() => setShowDraw(false)}>
            <Drawer />
          </ClickAwayListener>
        )}
      </div>
      <div className="flex justify-center bg-red-400 mr-8 space-x-2 h-screen">
        <div className="bg-gray-50 pt-16 w-96 h-auto border-r mr-16">
            <div className="pl-10">
                <h1 className="font-semibold text-3xl">All notes</h1>
            </div>
            <button
              className="float-end absolute bottom-0 text-gray-500 text-lg flex mb-4 pl-4"
              onClick={() => createNote()}
            >
              <Add/>&nbsp; New note
            </button>
        </div>

        {!reader && (
          <textarea
            className="w-screen outline-0 cursor-text pt-16 text-lg"
            onChange={(e) => setDoc(e.target.value)}
            value={doc || ""}
            placeholder="Start typing..."
            autoFocus
          />
        )}
        {reader && (
          <ReactMarkdown
            children={doc}
            remarkPlugins={[[remarkGfm, { singleTilde: true }], [remarkMath]]}
            rehypePlugins={[rehypeKatex]}
            className="w-screen pt-16 text-lg"
            components={{
              a({ children }) {
                return (
                  <a
                    href={`${children}`}
                    target="_blank"
                    className="cursor-pointer text-blue-600 hover:underline"
                  >
                    {children}
                  </a>
                )
              },
              h1({ children }) {
                return (
                  <h1 className="text-6xl font-semibold py-8">
                    {children}
                  </h1>
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
