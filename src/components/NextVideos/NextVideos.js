import './NextVideos.scss';
import Video from '../../data/videos.json';


export default function VideoList({Vids, playingVideo, changeVideo}){
   
    return(
        <section className='video-list'>
        <h2 className='video-list__header'>NEXT VIDEOS</h2>
            <ul className='video-list__listing'>
            {Vids.filter(video => video.id !== playingVideo.id)
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