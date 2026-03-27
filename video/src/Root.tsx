import {Composition} from 'remotion';
import {Walkthrough} from './Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Walkthrough"
        component={Walkthrough}
        durationInFrames={285}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
