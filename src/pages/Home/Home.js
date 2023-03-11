import "./Home.scss";

import { useEffect, useState } from "react";
import { getDetails } from "../../components/DataApi/DataApi";
import { useParams } from "react-router-dom";
import { getVideos } from "../../components/DataApi/DataApi";

import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import Comments from "../../components/CommentForm/CommentForm";

export default function VideoPage() {
	const { id } = useParams();
	const [video, setVideo] = useState(0);
	const [details, setDetails] = useState(0);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos().then((videosData) => {
			if (typeof id === "undefined") {
				setVideo(videosData[0]);

				getDetails(videosData[0].id).then((detailsData) => {
					setDetails(detailsData);
				});
			} else {
				videosData.forEach((video) => {
					if (video.id === id) {
						setVideo(video);

						getDetails(video.id).then((detailsData) => {
							setDetails(detailsData);
						});
					}
				});
			}

			setVideos(videosData);
		});
	}, [id]);

	//remove current video from the list
	const filteredVideos = videos.filter((video) => {
		if (video.id !== id) return video;
		return false;
	});

	//if we don't have an id to filter out, then just remove the first one.
	if (typeof id === "undefined") filteredVideos.shift();
	return (
		<div className="main">
			<CurrentVideo video={video} id={id} />
			<div className="main__container">
				<div className="main__details">
					<VideoDetails details={details} />
					<Comments comments={details.comments} />
				</div>
				<div className="main__videos">
					<NextVideos videos={filteredVideos} />
				</div>
			</div>
		</div>
	);
}
