import './BodyMain.scss'
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideo from "../NextVideos/NextVideos";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";

//Main Display on home page
export default function BodyMain({Vids, currentVideo, changeVideo}){
    return(
        <>
        <CurrentVideo
                currentVideo={currentVideo}
            />
        <div className="container">
           <div className="box">
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
            <div className="list">
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