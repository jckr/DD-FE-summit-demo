import React from "react";

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

return (<div className="row">
<button
  onClick={() =>
    setStyle1({
      ...style1,
      visibility: style1.visibility ? undefined : 'hidden',
    })
  }
>
  {`${style1.visibility ? 'show' : 'hide'} layer 1`}
</button>
<button
  onClick={() =>
    setStyle2({
      ...style2,
      visibility: style2.visibility ? undefined : 'hidden',
    })
  }
>
  {`${style2.visibility ? 'show' : 'hide'} layer 2`}
</button>
<button
  onClick={() =>
    setStyle3({
      ...style3,
      visibility: style3.visibility ? undefined : 'hidden',
    })
  }
>
  {`${style3.visibility ? 'show' : 'hide'} layer 3`}
</button>
<button
  onClick={() =>
    setStyle4({
      ...style4,
      visibility: style4.visibility ? undefined : 'hidden',
    })
  }
>
  {`${style4.visibility ? 'show' : 'hide'} layer 4`}
</button>
</div>);
}
