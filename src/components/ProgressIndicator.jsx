import CircularProgress, { ProgressRef } from 'react-native-circular-progress-indicator';

export default function ProgressIndicator(){

const progressRef = useRef<ProgressRef>(null);
// to pause animation
progressRef.current.pause();
// to play animation
progressRef.current.play();
// to re-play animation
progressRef.current.reAnimate();

return(

 <CircularProgress
  ref={progressRef}
  value={100}
  radius={120}
  duration={10000}
/>
)
}