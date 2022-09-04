import { useState, useEffect, useRef } from "react"
import type React from "react"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup } from "codemirror"
import { keymap } from "@codemirror/view"
import { history } from "@codemirror/history"
import { defaultKeymap } from "@codemirror/commands"
import { indentOnInput } from "@codemirror/language"
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter"
import { defaultHighlightStyle, HighlightStyle } from "@codemirror/highlight"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown"

let startState = EditorState.create({
    doc: "Hello World",
    extensions: [keymap.of(defaultKeymap)]
})

let view = new EditorView({
    state: startState,
    parent: document.body
})

interface States {
    initalUpdate: string,
    onUpdate?: (state:EditorState) => void
}

const CodeMirror = <T extends Element>(
    states: States
): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer= useRef<T>(null)
    const [editorView, setEditorView] = useState<EditorView>()
    const { onUpdate } = states

    useEffect(() => {
        if(!refContainer.current) return

        const startState = EditorState.create({
            doc: states.initalUpdate,
            extensions: [
                history(),
                indentOnInput(),
                lineNumbers(),
                highlightActiveLineGutter(),
            ]
        })
    })
    return [refContainer, editorView]
}

export default CodeMirror