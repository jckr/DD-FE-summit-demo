import { useEffect, useRef } from 'react';
import './App.css';

const HEIGHT = 1024;
const WIDTH = 1024;

export const Canvas = (props: {
  imageUrl: string;
  style: React.CSSProperties;
}) => {
  const { imageUrl, style = {} } = props;
  console.log(imageUrl);

  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    const image = new Image();
    console.log(image);
    image.onload = () => {
      ctx.drawImage(image, 0, 0, WIDTH, HEIGHT);
    };
    image.src = imageUrl;
  }, [imageUrl]);
  return (
    <canvas
      className="canvas"
      style={style}
      height={HEIGHT}
      width={WIDTH}
      ref={ref}
    />
  );
};
