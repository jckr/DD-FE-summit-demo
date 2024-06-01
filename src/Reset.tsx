import { Action } from './Action';

export const Reset = (props: {
    setStyle: (style: React.CSSProperties) => void,
    setStyle1: (style: React.CSSProperties) => void,
    setStyle2: (style: React.CSSProperties) => void,
    setStyle3: (style: React.CSSProperties) => void,
    setStyle4: (style: React.CSSProperties) => void,
    setStyle5: (style: React.CSSProperties) => void,
    setStyleIntermediary: (style: React.CSSProperties) => void,

}) => {
    const {setStyle, setStyle1, setStyle2, setStyle3, setStyle4, setStyle5, setStyleIntermediary} = props;
    return        (<Action
        action={() => {
          setStyle({});
          setStyle1({});
          setStyle2({});
          setStyle3({});
          setStyle4({});
          setStyle5({});
          setStyleIntermediary({});
        }}
        label="Reset"
      />)
    
};