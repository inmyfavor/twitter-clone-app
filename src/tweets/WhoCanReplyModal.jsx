import React from 'react';
import AtSignIcon from '../icons/AtSignIcon';
import CheckIcon from '../icons/CheckIcon';
import FollowUserIcon from '../icons/FollowUserIcon';
import WorldIcon from '../icons/WorldIcon';

const ReplyCategory = (props) => {
    return (
        <div className='h-[60px] flex flex-row items-center justify-between hover:bg-light-gray hover:bg-opacity-[0.5] px-[20px] cursor-pointer'
        onClick={() => props.setCheckMark(props.value)}>
            <div className='flex flex-row gap-[10px] items-center'>
                <div className='h-[40px] w-[40px] rounded-[20px] bg-blue p-[8px]'>{props.icon}</div>
                <div className='font-semibold text-[14px]'>{props.title}</div>
            </div>
            { props.value === props.checkMark &&
            <CheckIcon width='14px' height='14px' fill='#0284c7' className='flex shrink-0 justify-self-end'/> }
        </div>
    );
};

const WhoCanReplyModal = (props) => {
    return (
        <div className='absolute top-[35px] h-[320px] w-[360px] flex flex-col bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-[16px] py-[15px]'>
            <div className='text-[16px] font-semibold mb-[5px] px-[20px]'>Кто может отвечать?</div>
            <div className='text-[14px] text-gray mb-[20px] px-[20px]'>
                Выберите, кто может отвечать на этот твит. Упомянутым пользователям эта возможность доступна всегда.
            </div>
            <div className='flex flex-col'>
                <ReplyCategory 
                    title='Все' 
                    icon={ <WorldIcon width='24px' height='24px' fill='white'/> }
                    checkMark={props.checkMark}
                    setCheckMark={props.setCheckMark}
                    value={0}/>
                <ReplyCategory 
                    title='Люди, которых вы читаете' 
                    icon={ <FollowUserIcon width='24px' height='24px' fill='white'/> }
                    checkMark={props.checkMark}
                    setCheckMark={props.setCheckMark}
                    value={1}/>
                <ReplyCategory 
                    title='Только упомянутые вами пользователи' 
                    icon={ <AtSignIcon width='24px' height='24px' fill='white'/> }
                    checkMark={props.checkMark}
                    setCheckMark={props.setCheckMark}
                    value={2}/>
            </div>
        </div>
    );
};

export default WhoCanReplyModal;