import * as React from "react"
import {useEffect, useRef} from 'react';


export const StyleBlock = (props: {
    setStyle: (style: React.CSSProperties) => void,
    setStyle1: (style: React.CSSProperties) => void,
    setStyle2: (style: React.CSSProperties) => void,
    setStyle3: (style: React.CSSProperties) => void,
    setStyle4: (style: React.CSSProperties) => void,
    setStyle5: (style: React.CSSProperties) => void,
    setStyleIntermediary: (style: React.CSSProperties) => void,
    style: React.CSSProperties,
    style1: React.CSSProperties,
    style2: React.CSSProperties,
    style3: React.CSSProperties,
    style4: React.CSSProperties,
    style5: React.CSSProperties,
    styleIntermediary: React.CSSProperties,
}) => {
    const {
        setStyle, setStyle1, setStyle2, setStyle3, setStyle4, setStyle5, setStyleIntermediary,
        style, style1, style2, style3, style4, style5, styleIntermediary
     } = props;
    return <div className="code-block">
    <StyleSection setStyle={setStyle} style={style} title="Style container" />
    <StyleSection setStyle={setStyle1} style={style1} title="Style layer 1 (background image)" />
    <StyleSection setStyle={setStyle2} style={style2} title="Style layer 2 (2nd image)" />
    <StyleSection setStyle={setStyleIntermediary} style={styleIntermediary} title="Style div grouping layer 3 and 4" />
    <StyleSection setStyle={setStyle3} style={style3} title="Style layer 3 (3rd image)" />
    <StyleSection setStyle={setStyle4} style={style4} title="Style layer 4 (image in foreground)" />
    <StyleSection setStyle={setStyle5} style={style5} title="Style layer 5 (empty div)" />
    </div>
}

const StyleSection = (props: {style: React.CSSProperties, setStyle: (style: React.CSSProperties) => void, title: string}) => {
    const {setStyle, style, title} = props;
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        ref.current.value = JSON.stringify(style, null, 2);
    }, [style]);

    return (<>
    <h4>{title}</h4>
    <textarea ref={ref} onChange={(e) => {setStyle(JSON.parse(e.target.value) as React.CSSProperties);}} /></>);
}

