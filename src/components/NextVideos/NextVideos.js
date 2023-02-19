import './NextVideos.scss';
import Video from '../Video/Video';


export default function NextVideos({Vids, currentVideo, changeVideo}){
   
    return(
        <section className='next'>
        <h2 className='next__header'>NEXT VIDEOS</h2>
            <ul className='next__listing'>
            {Vids.filter(video => video.id !== currentVideo.id)
            .map(video => {
                return(
                    <Video
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    channel={video.channel}
                    image={video.image}
                    changeVideo={changeVideo}
                />
                )
            })
               
        }  </ul>
            </section>
        
    )

}
  
        

