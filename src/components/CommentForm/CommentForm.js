import Post from '../../assets/icons/add_comment.svg';
import Avatar from '../../assets/images/Mohan-muruge.jpg';
import './CommentForm.scss';

export default function Form(){
    return (
    <div className='commentform'>
        <label className='commentform__title'>JOIN THE CONVERSATION</label>
        
        <div className='commentform__input-field'>
            <input className='commentform__input' name='comment' for='comment' placeholder='Add a new comment'/>
            <button className='commentform__button'>COMMENT</button>
        </div>

        <img className='commentform__icon' src={Post} alt='post'/>
        <img className='commentform__avatar' src={Avatar} alt='avatar'/>
    </div>

)}

