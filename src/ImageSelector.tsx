import layer1il from './assets/layer-01.webp';
import layer2il from './assets/layer-02.webp';
import layer3il from './assets/layer-03.webp';
import layer4il from './assets/layer-04.webp';

import layer1ed from './assets/layer_1_ed.png';
import layer2ed from './assets/layer_2_ed.png';
import layer3ed from './assets/layer_3_ed.png';
import layer4ed from './assets/layer_4_ed.png';

import layer1ts from './assets/layer_1_ts.png';
import layer2ts from './assets/layer_2_ts.png';
import layer3ts from './assets/layer_3_ts.png';
import layer4ts from './assets/layer_4_ts.png';
export const ImageSelector = (props: {setImages: (arg: [string,string,string,string]) => void}) => {
    const {setImages} = props;

    return <select onChange={(e:  React.ChangeEvent<HTMLSelectElement>) => {
        switch(e.target.value) {
          case "ed":
            setImages([
              layer1ed,
              layer2ed,
              layer3ed,
              layer4ed]);
            return;
          case "ts":
            setImages([
              layer1ts,
              layer2ts,
              layer3ts,
              layer4ts
            ]);
            return;
        }
        setImages([layer1il, layer2il,layer3il,layer4il]);
       }}>
          <option value="illustration">Illustration</option>
          <option value="ed">excalidraw diagram</option>
          <option value="ts">time series</option>
        </select>
}