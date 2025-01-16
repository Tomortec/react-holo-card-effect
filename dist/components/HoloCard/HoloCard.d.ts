import React from 'react';
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
export declare const HoloCard: ({ children, className, style, url, height, width, showSparkles, sparkleImg, sparkleImgOpacity, sparkleImgBgSize }: Props) => JSX.Element;
export {};
