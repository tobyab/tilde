import { useState, useEffect, useRef } from "react"
import type React from "react"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup } from "codemirror"
import { keymap } from "@codemirror/view"
import { history } from "@codemirror/history"
import { defaultKeymap } from "@codemirror/commands"
import { indentOnInput } from "@codemirror/language"
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter"

let startState = EditorState.create({
    doc: "Example Note",
    extensions: [basicSetup, keymap.of(defaultKeymap)]
})

function openMenu() {
    return keymap.of ([{
        key: "Cmd-e",
        run() { console.log("Hello, sidebar!"); return true }
    }])
}

interface States {
    initalUpdate: string,
    onUpdate?: (state:EditorState) => void
}

const CodeMirror = <T extends Element>(
    states: States
): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer= useRef<T>(null)
    const [editorView, setEditorView] = useState<EditorView>()

    useEffect(() => {
        if (!refContainer.current) return

        const startState = EditorState.create({
            doc: states.initalUpdate,
            extensions: [
                history(),
                lineNumbers(),
                indentOnInput(),
                highlightActiveLineGutter(),
            ]
        })
    })
    return [refContainer, editorView]
}

export default CodeMirror
