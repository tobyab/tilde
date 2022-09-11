import React, { useState, useCallback, useEffect } from "react"
import CodeMirror from "../lib/codemirror"

interface States {
    initalUpdate: string,
    onUpdate: (doc:string) => void
}

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
            null
        }
    }, [editorView])

    return <div ref={refContainer}/>
}

export default Editor
