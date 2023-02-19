import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideo from "../NextVideos/NextVideos";
import Comments from "../Comments/Comments";
import './Main.scss'
import CommentForm from "../CommentForm/CommentForm";
export default function Main({Vids, currentVideo, changeVideo}){
    return(
        <>
        <CurrentVideo
                currentVideo={currentVideo}
            />
        <div className="main-container">
           <div className="main-small-container">
            <VideoDetails
                currentVideo={currentVideo}
            />
            <CommentForm
                currentVideo={currentVideo}
            />
            <Comments
                Vids={Vids}
                currentVideo={currentVideo}
            />
            </div> 
            <div className="video-list-container">
            <NextVideo
                Vids={Vids}
                currentVideo={currentVideo}
                changeVideo={changeVideo}
            />
            </div>
        </div>
        </>
    )
}