import './PlayingVideo.scss';

 
export default function CurrentVideo({ playingVideo}){
  return (
    <div className='main-container'>
        <video className='video' poster={playingVideo.image} controls> </video>
      </div>
    )

}
  
   