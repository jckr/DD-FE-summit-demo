import React from "react";
import { Action } from "./Action";

export const LayerFilter = (props: {
    style1: React.CSSProperties,
    style2: React.CSSProperties,
    style3: React.CSSProperties,
    style4: React.CSSProperties,
    setStyle1: (style: React.CSSProperties) => void,
    setStyle2: (style: React.CSSProperties) => void,
    setStyle3: (style: React.CSSProperties) => void,
    setStyle4: (style: React.CSSProperties) => void,

}) => {
    const {style1, style2, style3, style4, setStyle1, setStyle2, setStyle3, setStyle4} = props;
const layers: Array<[React.CSSProperties, (style: React.CSSProperties) => void]> = [
  [style1, setStyle1],
  [style2, setStyle2],
  [style3, setStyle3],
  [style4, setStyle4]
];

return (<div className="row">
  {layers.map(([style, setStyle], i) => 
    <Action
  action={() =>
    setStyle({
      ...style,
      visibility: style1.visibility ? undefined : 'hidden',
    })
  }

  label={`${style1.visibility ? 'show' : 'hide'} layer 1`}
  key={`a-${i}`}
/>)}

  
  

</div>);
}
