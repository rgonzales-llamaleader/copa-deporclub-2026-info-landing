import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from 'remotion';

export interface ScreenSlideProps {
  imagePath: string;
  title: string;
  description: string;
}

export const ScreenSlide: React.FC<ScreenSlideProps> = ({
  imagePath,
  title,
  description,
}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  // Subtle zoom-in effect
  const zoom = interpolate(frame, [0, 150], [1, 1.1], {
    extrapolateRight: 'clamp',
  });

  // Fade and slide-up for text
  const textOpacity = spring({
    frame: frame - 15,
    fps,
    config: {damping: 10.5},
  });

  const textTranslateY = interpolate(textOpacity, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      <AbsoluteFill style={{transform: `scale(${zoom})`, overflow: 'hidden'}}>
        <Img
          src={staticFile(imagePath)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundColor: '#111',
          }}
        />
      </AbsoluteFill>

      {/* Overlay */}
      <AbsoluteFill
        style={{
          justifyContent: 'flex-end',
          padding: 80,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        }}
      >
        <div
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            color: 'white',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <h1 style={{fontSize: 60, marginBottom: 10, fontWeight: 700}}>
            {title}
          </h1>
          <p style={{fontSize: 32, opacity: 0.9, maxWidth: 800, lineHeight: 1.4}}>
            {description}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
