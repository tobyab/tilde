import ReactMarkdown from "react-markdown"
import React, { useState, useCallback, useEffect } from "react"
import CodeMirror from "../lib/codemirror"

const Editor = (States) => {
    const { onUpdate, initalUpdate } = States
    const handleUpdates = useCallback (
        state => onUpdate(state.doc.toString()),
        [onUpdate]
    )
    const [refContainer, editorView] = CodeMirror<HTMLDivElement>({
        initalUpdate: initalUpdate,
        onUpdate: handleUpdates
    })

    useEffect(() => {
        if (editorView) {
            <h1>Hello, world!</h1>
        }
    }, [editorView])

    return <div ref={refContainer}/>
}

export default Editor
