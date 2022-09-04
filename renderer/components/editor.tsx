import React, { useState, useCallback } from "react"
import CodeMirror from "../lib/codemirror"

interface States {
    initalUpdate: string,
    onUpdate: (doc:string) => void
}

const Editor: React.FC<States> = (states) => {
    const { onUpdate, initalUpdate } = states
    const handleUpdates = useCallback (
        state => onUpdate(state.doc.toString()),
        [onUpdate]
    )
    const [refContainer, editorView] = CodeMirror<HTMLDivElement>({
        initalUpdate: initalUpdate,
        onUpdate: handleUpdates
    })
    return <div className="" ref={refContainer}/>
}

export default Editor