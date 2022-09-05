import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkReact from "remark-react"
import { defaultSchema } from "hast-util-sanitize"
import React from "react"

interface Props { document: string }

const schema = {
    ...defaultSchema,
    atributes: {
        ...defaultSchema.attributes,
        code: [...(defaultSchema.attributes?.code || []), 'className']
    }
}
//export default function Preview(Props) {
const Preview = (Props) => {
    const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
        createElement: React.createElement,
        sanitize: schema
    })
}