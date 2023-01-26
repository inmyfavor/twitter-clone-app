import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import AtSignIcon from '../icons/AtSignIcon';
import FollowUserIcon from '../icons/FollowUserIcon';
import PlusIcon from '../icons/PlusIcon';
import ProgressBarIcon from '../icons/ProgressBarIcon';
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

const InteractiveIcon = (props) => {
    const [descriptionDisplay, setDescriptionDisplay] = useState('none');
    return (
        <div className='relative w-[30px] h-[30px] flex justify-center items-center rounded-[15px] 
        hover:bg-bg-blue cursor-pointer'
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
    const [tweet, setTweet] = useState('');

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
                        rounded-[10px] text-blue hover:bg-bg-blue'>
                            Все
                        </button>
                        <img alt='' src='svg/forwardarrow.svg' 
                            className='absolute top-[6px] right-[8px] w-[16px] h-[16px] rotate-90 pointer-events-none'/>
                    </div>
                    <textarea 
                        placeholder='Что происходит?'
                        value={tweet}
                        onChange={(e) => setTweet(e.target.value)}
                        className='text-[18px] mb-[10px] placeholder:text-gray resize-none outline-none h-[30px]'/>
                    <div className='flex justify-start mb-[15px]'>
                        <div className='relative flex justify-center'>
                            <div className={classNames('flex flex-row gap-[8px] items-center ml-[-10px] h-[24px] px-[10px]', {
                                    'hover:bg-bg-blue rounded-[8px] cursor-pointer' : modalDisplay === 'none',
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
                    <div className='flex flex-row items-center'>
                        <div className={classNames('h-[26px] w-[26px] rounded-[13px] mr-[10px] p-[2px]', {
                            'bg-blue' : tweet.length > 0 && tweet.length < 190,
                            'bg-yellow' : tweet.length > 189 && tweet.length < 210,
                            'bg-red' : tweet.length > 209 && tweet.length < 220
                        })}>
                            <div className={classNames('h-[22px] w-[22px] rounded-[11px] bg-white text-[12px] flex justify-center items-center', {
                                'text-red' : tweet.length > 209
                            })}>
                                {tweet.length < 190 ? '' : 210-tweet.length}
                            </div>
                        </div>
                        {/* <ProgressBarIcon className='mr-[10px]' stroke='#000000'/>
                        <svg>
                        <circle cx="12" cy="12" r="11" transform="rotate(-90 30 30)" fill="none" 
                        stroke-dashoffset="200" stroke-dasharray="314" stroke="#000000" stroke-width="2"/>
                        </svg> */}
                        <div className='h-[35px] border-r border-button-gray mr-[10px]'></div>
                        <div className='h-[26px] w-[26px] rounded-[13px] bg-button-gray p-[1px] mr-[20px]'>
                            <div className='h-[24px] w-[24px] rounded-[12px] bg-white hover:bg-bg-blue 
                            cursor-pointer flex justify-center items-center'>
                                <PlusIcon fill='#0284c7' width='20px' height='20px'/>
                            </div>
                        </div>
                        <button className={classNames('h-[35px] bg-blue text-white py-[2px] px-[20px] text-[14px] rounded-[16px] font-semibold', {
                                'bg-opacity-[0.5]' : tweet === '' || tweet.length > 210
                            })}
                            disabled={tweet!=='' && tweet.length<210 ? false : true}
                        >
                            Твитнуть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;