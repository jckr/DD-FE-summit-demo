import { Canvas } from './Canvas';

export const ImageStack = (props: {
    images: [string, string, string, string],
    style: React.CSSProperties,
    style1: React.CSSProperties,
    style2: React.CSSProperties,
    style3: React.CSSProperties,
    style4: React.CSSProperties,
    style5: React.CSSProperties,
    styleIntermediary: React.CSSProperties,
}) => {
    const     {images, style, style1, style2, style3, style4, style5, styleIntermediary
} = props;
    return <div className="image-stack" style={style}>
    <Canvas imageUrl={images[0]} style={style1} />
    <Canvas imageUrl={images[1]} style={style2} />
    <div className="image-stack" style={styleIntermediary}>
      <Canvas imageUrl={images[2]} style={style3} />
      <Canvas imageUrl={images[3]} style={style4} />
    </div>
    <div style={style5} />
  </div>
}