import React from "react"

export const StyleBlock = (props: {
    style: React.CSSProperties,
    style1: React.CSSProperties,
    style2: React.CSSProperties,
    style3: React.CSSProperties,
    style4: React.CSSProperties,
    styleIntermediary: React.CSSProperties,
}) => {
    const {
        style, style1, style2, style3, style4, styleIntermediary
     } = props;
    return <div className="code-block">
    <StyleSection style={style} title="Style container" />
    <StyleSection style={style1} title="Style layer 1" />
    <StyleSection style={style2} title="Style layer 2" />
    <StyleSection style={styleIntermediary} title="Style div grouping layer 3 and layer 4" />
    <StyleSection style={style3} title="Style layer 3" />
    <StyleSection style={style4} title="Style layer 4" />
    </div>
}

const StyleSection = (props: {style: React.CSSProperties, title: string}) => {
    const {style, title} = props;
    return (<>
    <h4>{title}</h4>
    <pre>
            <code>{JSON.stringify(style)}</code>
          </pre>
    </>);
}