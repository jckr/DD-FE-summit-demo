import { useState } from 'react';
import './App.css';
import { Canvas } from './Canvas';
import { Action } from './Action';
function App() {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [style1, setStyle1] = useState<React.CSSProperties>({});
  const [style2, setStyle2] = useState<React.CSSProperties>({});
  const [style3, setStyle3] = useState<React.CSSProperties>({});
  const [style4, setStyle4] = useState<React.CSSProperties>({});
  return (
    <div className="column">
      <div className="row">
        <div className="image-stack" style={style}>
          <Canvas imageUrl="../layer-01.webp" style={style1} />
          <Canvas imageUrl="../layer-02.webp" style={style2} />
          <Canvas imageUrl="../layer-03.webp" style={style3} />
          <Canvas imageUrl="../layer-04.webp" style={style4} />
        </div>
        <div className="column">
          <h4>Style container</h4>
          <pre>
            <code>{JSON.stringify(style)}</code>
          </pre>

          <h4>Style layer 1</h4>
          <pre>
            <code>{JSON.stringify(style1)}</code>
          </pre>
          <h4>Style layer 2</h4>
          <pre>
            <code>{JSON.stringify(style2)}</code>
          </pre>
          <h4>Style layer 3</h4>
          <pre>
            <code>{JSON.stringify(style3)}</code>
          </pre>
          <h4>Style layer 4</h4>
          <pre>
            <code>{JSON.stringify(style4)}</code>
          </pre>
        </div>
      </div>
      <div className="row">
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
      </div>
      <div className="column">
        <div className="scenario">
          <Action
            action={() => {
              setStyle({});
              setStyle1({});
              setStyle2({});
              setStyle3({});
              setStyle4({});
            }}
            label="Reset"
          />
        </div>
        <h3>
          I want an effect that will change all layers - everything, everywhere,
          all at once
        </h3>
        <div className="scenario">
          <Action
            action={() => {
              setStyle({ filter: 'blur(2px)' });
            }}
            label="blur a little"
          />
          <Action
            action={() => {
              setStyle({ filter: 'blur(20px)' });
            }}
            label="blur a lot"
          />
          <Action
            action={() => {
              setStyle({ filter: 'saturate(5)' });
            }}
            label="saturate"
          />
          <Action
            action={() => {
              setStyle({ filter: 'saturate(0.25)' });
            }}
            label="de-saturate"
          />
          <Action
            action={() => {
              setStyle({ filter: 'grayscale(1)' });
            }}
            label="grayscale"
          />
          <Action
            action={() => {
              setStyle({ filter: 'sepia(1)' });
            }}
            label="sepia"
          />
          <Action
            action={() => {
              setStyle({ filter: 'hue-rotate(45deg)' });
            }}
            label="change hue"
          />
          <Action
            action={() => {
              setStyle({ filter: 'hue-rotate(225deg)' });
            }}
            label="change hue more"
          />
          <Action
            action={() => {
              setStyle({});
            }}
            label="no global effect"
          />
        </div>
        <h3>
          I want an effect that will only affect layers under the 3nd one (so 1
          and 2)
        </h3>
        <div>Everything under that layer.</div>
        <div className="scenario">
          <Action
            action={() => {
              setStyle3({ backdropFilter: 'grayscale(1)' });
            }}
            label="grayscale"
          />
          <Action
            action={() => {
              setStyle3({ backdropFilter: 'contrast(2)' });
            }}
            label="high contrast"
          />
          <Action
            action={() => {
              setStyle3({ backdropFilter: 'contrast(0.5)' });
            }}
            label="lower contrast"
          />
          <Action
            action={() => {
              setStyle3({ backdropFilter: 'invert(100%)' });
            }}
            label="invert"
          />
          <Action
            action={() => {
              setStyle3({});
            }}
            label="no backdrop filter"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
