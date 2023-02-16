import PlayingVideo from "../PlayingVideo/PlayingVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideos from "../NextVideos/NextVideos";
import Comments from "../Comments/Comments";
import './Main.scss'
import CommentForm from "../CommentForm/CommentForm";
export default function Main({Vids, playingVideo, changeVideo}){
    return(
        <>
        <PlayingVideo
                playingVideo={playingVideo}
            />
        <div className="main-container">
           <div className="main-small-container">
            <VideoDetails
                playingVideo={playingVideo}
            />
            <CommentForm
                playingVideo={playingVideo}
            />
            <Comments
                Vids={Vids}
                playingVideo={playingVideo}
            />
            </div> 
            <div className="video-list-container">
            <NextVideos
                Vids={Vids}
                playingVideo={playingVideo}
                changeVideo={changeVideo}
            />
            </div>
        </div>
        </>
    )
}