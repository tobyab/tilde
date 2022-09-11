import React, { useState, useEffect } from "react"

type Options = {
    text: string,
    style: string | null,
}

export const Code: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => {
    const [span, setSpan] = useState<Options>()
    const { className } = props
    const language = (className || "")
    return <code/>;
}