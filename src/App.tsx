import { useState } from 'react';
import './App.css';
// import { Action } from './Action';
import { LayerFilter } from './LayerFilter';
import { ImageSelector} from './ImageSelector';
import { Reset } from './Reset';
import { StyleBlock } from './StyleBlock';
import { Scenarios } from './Scenarios';
import layer1il from './assets/layer-01.webp';
import layer2il from './assets/layer-02.webp';
import layer3il from './assets/layer-03.webp';
import layer4il from './assets/layer-04.webp';
import { ImageStack } from './ImageStack';

function App() {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [styleIntermediary, setStyleIntermediary] = useState<React.CSSProperties>({});
  const [style1, setStyle1] = useState<React.CSSProperties>({});
  const [style2, setStyle2] = useState<React.CSSProperties>({});
  const [style3, setStyle3] = useState<React.CSSProperties>({});
  const [style4, setStyle4] = useState<React.CSSProperties>({});
  const [style5, setStyle5] = useState<React.CSSProperties>({});


  const [images, setImages] = useState<[string, string, string, string]>([layer1il, layer2il,layer3il,layer4il])

  const styles = {
    style, style1, style2, style3, style4, style5, styleIntermediary
  }
  const setStyles = {
    setStyle, setStyle1, setStyle2, setStyle3, setStyle4, setStyle5, setStyleIntermediary
  }

  return (
    <div className="row">
    <div className="column main">
      <ImageSelector setImages={setImages} />
      <ImageStack {...styles} images={images} />   
      <LayerFilter {...styles} {...setStyles} />
      <Reset  {...setStyles} />
      <Scenarios {...setStyles} />
    </div>
    <StyleBlock {...styles} {...setStyles}/>

  </div>
    
  );
}

export default App;
