import React, { useState } from 'react';
import UserAvatar from '../user/UserAvatar';

function onLikeClicked(likesCounter, setLikesCounter, likeIcon, setLikeIcon) {
    if (likeIcon === 'like') {
        setLikeIcon('liked');
        setLikesCounter(likesCounter+1);
    }
    else if (likeIcon === 'liked') {
        setLikeIcon('like');
        setLikesCounter(likesCounter-1);
    }
}

const Tweet = () => {
    const [likesCounter, setLikesCounter] = useState(0);
    const [likeIcon, setLikeIcon] = useState('like');
    const [commentsCounter, setCommentsCounter] = useState(0);
    return (
        <div className='w-full border-b-[2px] border-light-gray'>
            <div className='w-full p-[15px] flex flex-row gap-[15px]'>
                <UserAvatar/>
                <div className='w-full flex flex-col gap-[5px]'>
                    <div className='flex flex-row gap-[5px]'>
                        <div className='font-bold text-[14px]'>Имя</div>
                        <div className='text-gray text-[14px]'>@nickname</div>
                        <div className='text-gray text-[14px]'>· 16 января 2023 г.</div>
                    </div>
                    <p className='text-[14px] mb-[10px]'>всем привет! это мой первый твит</p>
                    <div className='w-full flex flex-row justify-between px-[70px]'>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <img alt='' src='svg/comment.svg'/>
                            <div className='text-gray text-[12px]'>{commentsCounter !== 0 ? commentsCounter : ''}</div>
                        </div>
                        <img alt='' src='svg/retweet.svg'/>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <img 
                                alt='' 
                                src={`svg/${likeIcon}.svg`} 
                                className='cursor-pointer'
                                onClick={() => onLikeClicked(likesCounter, setLikesCounter, likeIcon, setLikeIcon)}
                            />
                            <div className='text-gray text-[12px]'>{likesCounter !== 0 ? likesCounter : ''}</div>
                        </div>
                        <img alt='' src='svg/share.svg'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;