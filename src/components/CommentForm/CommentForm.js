import "./CommentForm.scss";
import Comment from "../Comment/Comment";
import Button from "../UploadButton/UploadButton";
import commentIcon from "../../assets/icons/add_comment.svg";

export default function Comments({ comments }) {
	console.log(comments);
	if (typeof comments === "undefined") return <div>Loading...</div>;

	const commentComponents = comments.map((comment) => (
		<Comment comment={comment} />
	));

	return (
		<div className="comments">
			<h4 className="comments__count">{comments.length} Comments</h4>
			<div className="comments__join">
				<div className="comments__left">
					<div className="comments__img" />
				</div>
				<div className="comments__right">
					<p>Join the conversation</p>
					<div className="comments__form">
						<textarea
							placeholder="Add a new comment"
							className="comments__input"
						/>
						<Button icon={commentIcon}>Comment</Button>
					</div>
				</div>
			</div>
			<div className="comments__list">{commentComponents}</div>
		</div>
	);
}
