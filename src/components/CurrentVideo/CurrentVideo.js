import './CurrentVideo.scss';

//Displaying placeholder and video from retrieved API
export default function CurrentVideo({currentVideo}){
  return (
    <div className='main-container'>
        <video className='video' poster={currentVideo.image} controls> </video>
      </div>
    )

}
  
   