import React, { useState } from 'react';
import AtSignIcon from '../icons/AtSignIcon';
import FollowUserIcon from '../icons/FollowUserIcon';
import WorldIcon from '../icons/WorldIcon';
import UserAvatar from '../user/UserAvatar';
import WhoCanReplyModal from './WhoCanReplyModal';

const replyCategory = [
    'Отвечать могут все пользователи', 
    'Отвечать могут пользователи, которых вы читаете', 
    'Отвечать могут только пользователи, которых вы упоминаете'
];

const replyIcons = [
    <WorldIcon width='16px' height='16px' fill='#0284c7'/>,
    <FollowUserIcon width='16px' height='16px' fill='#0284c7'/>,
    <AtSignIcon width='16px' height='16px' fill='#0284c7'/>
];

const CreateTweet = () => {
    const [checkMark, setCheckMark] = useState(0);
    return (
        <div className='flex flex-row gap-[15px] p-[15px] border-b-[2px] border-light-gray'>
            <UserAvatar/>
            <div className='flex flex-col'>
                <div className='relative h-[24px] w-[60px] mb-[20px]'>
                    <button className='w-full h-full border border-button-gray text-[14px] pr-[20px] rounded-[10px] text-blue hover:bg-blue hover:bg-opacity-[0.1]'>
                        Все
                    </button>
                    <img alt='' src='svg/forwardarrow.svg' className='absolute top-[6px] right-[8px] w-[16px] h-[16px] rotate-90 pointer-events-none'/>
                </div>
                <div className='text-[18px] text-gray mb-[10px]'>Что происходит?</div>
                <div className='relative flex justify-center'>
                    <div className='flex flex-row gap-[8px] items-center ml-[-10px] hover:bg-blue hover:bg-opacity-[0.1] rounded-[8px] h-[24px] px-[10px]'>
                        {replyIcons[checkMark]}
                        <div className='text-blue text-[14px]'>{replyCategory[checkMark]}</div>
                    </div>
                    <WhoCanReplyModal checkMark={checkMark} setCheckMark={setCheckMark}/>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;