import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import AtSignIcon from '../icons/AtSignIcon';
import FollowUserIcon from '../icons/FollowUserIcon';
import WorldIcon from '../icons/WorldIcon';
import UserAvatar from '../user/UserAvatar';
import WhoCanReplyModal from './WhoCanReplyModal';
import { HeaderButton } from '../auth/Button';

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

const InteractiveIcon = (props) => {
    const [descriptionDisplay, setDescriptionDisplay] = useState('none');
    return (
        <div className='relative w-[30px] h-[30px] flex justify-center items-center rounded-[15px] 
        hover:bg-blue hover:bg-opacity-[0.1] cursor-pointer'
        onMouseOver={()=>setDescriptionDisplay('flex')}
        onMouseOut={()=>setDescriptionDisplay('none')}>
            <img alt='' src={`svg/${props.icon}.svg`}/>
            <div className='absolute mt-[45px] px-[5px] py-[2px] bg-black bg-opacity-[0.4] 
                text-white text-[10px] rounded-[5px] whitespace-nowrap'
                style={{display: descriptionDisplay}}>
                    {props.title}
            </div>
        </div>
    );
};

const CreateTweet = () => {

    const [checkMark, setCheckMark] = useState(0);
    const [modalDisplay, setModalDisplay] = useState('none');

    const reply = useRef(null);

    useEffect(() => {
        const onClick = e => reply.current.contains(e.target) || setModalDisplay('none');
        const onScroll = e => reply.current.contains(e.target) || setModalDisplay('none');
        document.addEventListener('click', onClick);
        document.addEventListener('scroll', onScroll);
        return () => { document.removeEventListener('click', onClick);
                       document.removeEventListener('scroll', onScroll); }
    }, []);

    return (
        <div className='w-full flex flex-row gap-[15px] py-[15px] pl-[15px] pr-[30px] border-b-[2px] border-light-gray'>
            <UserAvatar/>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col border-b-[2px] border-light-gray'>
                    <div className='relative h-[24px] w-[60px] mb-[20px]'>
                        <button className='w-full h-full border border-button-gray text-[14px] pr-[20px] 
                        rounded-[10px] text-blue hover:bg-blue hover:bg-opacity-[0.1]'>
                            Все
                        </button>
                        <img alt='' src='svg/forwardarrow.svg' 
                            className='absolute top-[6px] right-[8px] w-[16px] h-[16px] rotate-90 pointer-events-none'/>
                    </div>
                    <div className='text-[18px] text-gray mb-[10px]'>Что происходит?</div>
                    <div className='flex justify-start mb-[15px]'>
                        <div className='relative flex justify-center'>
                            <div className={classNames('flex flex-row gap-[8px] items-center ml-[-10px] h-[24px] px-[10px]', {
                                    'hover:bg-blue hover:bg-opacity-[0.1] rounded-[8px] cursor-pointer' : modalDisplay === 'none',
                                    'cursor-default select-none' : modalDisplay === 'flex'
                                })}
                                onClick={modalDisplay === 'none' ? ()=>setModalDisplay('flex') : ()=>setModalDisplay('none')}
                                ref={reply}>
                                {replyIcons[checkMark]}
                                <div className='text-blue text-[14px] font-bold'>{replyCategory[checkMark]}</div>
                            </div>
                            <WhoCanReplyModal 
                                checkMark={checkMark} 
                                setCheckMark={setCheckMark} 
                                modalDisplay={modalDisplay}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center mt-[15px]'>
                    <div className='flex flex-row gap-[10px]'>
                        <InteractiveIcon icon='picture' title='Медиа'/>
                        <InteractiveIcon icon='gif' title='GIF-файл'/>
                        <InteractiveIcon icon='list' title='Опрос'/>
                        <InteractiveIcon icon='emojismile' title='Эмодзи'/>
                    </div>
                    <HeaderButton name='Твитнуть' cStyle='h-[35px] bg-blue text-white'/>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;