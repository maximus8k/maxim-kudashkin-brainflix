import "./IconImage.scss";

function icon(props) {
	return (
		<div className={"avatar " + props.className}
			style={{ backgroundImage: `url(${props.src})`}}
		></div>
	);
}

export default icon;
