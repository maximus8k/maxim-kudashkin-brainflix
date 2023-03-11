import "./CurrentVideo.scss";

export default function Player({ video, id }) {
	return (
		<div className="playing" key={id}>
			<div className="playing__controls">
				<video
					className="playing__video"
					src={video.url}
					poster={video.image}
				></video>
			</div>
		</div>
	);
}
