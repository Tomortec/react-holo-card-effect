import React, { useRef, useState } from 'react';
import { StyledHoloCard } from './HoloCard.styles';
import Tilt from 'react-parallax-tilt';

interface Props {
  children?: React.ReactNode;
  url: string;
  height?: number;
  width?: number;
  showSparkles?: boolean;
  sparkleImg?: string;
  sparkleImgOpacity?: number;
  sparkleImgBgSize?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HoloCard = ({ 
  children, 
  className, style,
  url, 
  height, width, 
  showSparkles, sparkleImg,
  sparkleImgOpacity, sparkleImgBgSize
}: Props) => {
  const [hover, setHover] = useState(false);
  const [animated, setAnimated] = useState(true);
  const [activeBackgroundPosition, setActiveBackgroundPosition] = useState({
    tp: 0,
    lp: 0,
  });
  const [activeRotation, setActiveRotation] = useState({
    y: 0,
    x: 0,
  });
  const ref = useRef<HTMLInputElement>(null);

  const handleOnMouseOver = (event: any) => {
    setAnimated(false);
    setHover(true);

    const card = ref.current;

    const l =
      event.type === 'touchmove'
        ? event.touches[0].clientX
        : event.nativeEvent.offsetX;

    const t =
      event.type === 'touchmove'
        ? event.touches[0].clientY
        : event.nativeEvent.offsetY;

    const h = card ? card.clientHeight : 0;
    const w = card ? card.clientWidth : 0;

    var px = Math.abs(Math.floor((100 / w) * l) - 100);
    var py = Math.abs(Math.floor((100 / h) * t) - 100);

    var lp = 50 + (px - 50) / 1.5;
    var tp = 50 + (py - 50) / 1.5;

    setActiveBackgroundPosition({ lp, tp });
  };

  const handleOnMouseOut = () => {
    setHover(false);
    setAnimated(true);
    setActiveRotation({ x: 0, y: 0 });
  };

  return (
    <Tilt>
      <StyledHoloCard
        className={className} style={style}
        url={url}
        ref={ref}
        active={hover}
        animated={animated}
        activeRotation={activeRotation}
        activeBackgroundPosition={activeBackgroundPosition}
        onMouseMove={handleOnMouseOver}
        onTouchMove={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        height={height ?? 446}
        width={width ?? 320}
        showSparkles={showSparkles ?? true}
        sparkleImg={sparkleImg}
        sparkleImgOpacity={sparkleImgOpacity}
        sparkleImgBgSize={sparkleImgBgSize}
      >
        {children}
      </StyledHoloCard>
    </Tilt>
  );
};
