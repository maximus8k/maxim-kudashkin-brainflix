import './Comments.scss';


export default function Comments({currentVideo}){
    return (
<ul className='comments'>
{currentVideo.comments.map((comment) => {
    return(
        <li className='list list__border-top'>
            <div className='list__item'>
                <h3 className='list__item--name'>{comment.name}</h3>
                <p className='list__item--date'>{ new Date (comment.timestamp).toLocaleDateString()}</p>
            </div>
                <p className='list__item--comment'>{comment.comment}</p>
                <img className='list__item--avatar'/>
          </li>
    )
})}
</ul>
)}