import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import AtSignIcon from '../icons/AtSignIcon';
import FollowUserIcon from '../icons/FollowUserIcon';
import PlusIcon from '../icons/PlusIcon';
import ProgressBarIcon from '../icons/ProgressBarIcon';
import WorldIcon from '../icons/WorldIcon';
import UserAvatar from '../user/UserAvatar';
import WhoCanReplyModal from './WhoCanReplyModal';
import AudienceModal from './AudienceModal';

const replyCategory = [
    'Отвечать могут все пользователи', 
    'Отвечать могут пользователи, которых вы читаете', 
    'Отвечать могут только пользователи, которых вы упоминаете'
];

const audienceCategory = [
    'Все',
    'Близкий круг в Twitter'
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

const ChooseReply = (props) => {
    return (
        <div className='flex flex-row gap-[8px] items-center'>
            {replyIcons[props.replyCheckMark]}
            {replyCategory[props.replyCheckMark]}
        </div>
    );
};

const ClosePeople = () => {
    return (
        <div className='flex flex-row gap-[8px] items-center'>
            <img alt='' src='svg/lock.svg'/>
            Отвечать могут только люди из вашего Близкого круга в Twitter
        </div>
    );
};

const AudienceButton = (props) => {
    const audience = useRef(null);
    return (
        <div className='relative'>
            <button className={classNames('relative min-w-[60px] h-[24px] border text-[14px] font-semibold', 
            'pl-[10px] pr-[30px] rounded-[10px] mb-[20px]', {
                'text-blue border-button-gray hover:bg-bg-blue' : props.audienceCheckMark === 0,
                'text-green border-green hover:bg-green hover:bg-opacity-[0.1]' : props.audienceCheckMark === 1
            })}
            onClick={e => {
                if (props.audienceModalDisplay === 'none') {
                    e.stopPropagation();
                }
                props.setAudienceModalDisplay('flex');
            }}
            ref={audience}>
                {audienceCategory[props.audienceCheckMark]}
                <img alt='' src='svg/forwardarrow.svg' 
                className='absolute top-[4px] right-[8px] w-[16px] h-[16px] rotate-90 pointer-events-none'/>
            </button>
            <AudienceModal
                handle={props.reply}
                setModalDisplay={props.setAudienceModalDisplay}
                modalDisplay={props.audienceModalDisplay}
                checkMark={props.audienceCheckMark}
                setCheckMark={props.setAudienceCheckMark} />
        </div>
    );
};

const Textarea = (props) => {
    return (
        <div className='relative min-h-[30px] w-full mb-[10px] text-[18px]'>
            <div className='text-transparent whitespace-pre-wrap break-words select-none'>
                {props.tweet}
                <br/>
            </div>
            <textarea 
                placeholder='Что происходит?'
                value={props.tweet}
                onChange={(e) => props.setTweet(e.target.value)}
                className='absolute top-0 right-0 bottom-0 left-0 
                placeholder:text-gray resize-none outline-none w-full h-full'/>
        </div>
    );
};

const WhoCanReplyButton = (props) => {
    const [replyCheckMark, setReplyCheckMark] = useState(0);
    const [replyModalDisplay, setReplyModalDisplay] = useState('none');
    return (
        <div className='flex justify-start mb-[15px]'>
            <div className='relative flex justify-center'>
                <button className={classNames('ml-[-10px] h-[24px] px-[10px] text-blue text-[14px] font-bold', {
                        'hover:bg-bg-blue rounded-[8px] cursor-pointer' : replyModalDisplay === 'none' && props.audienceCheckMark !== 1,
                        'cursor-default select-none' : replyModalDisplay === 'flex' || props.audienceCheckMark === 1,
                        'opacity-[0.4]' : props.audienceCheckMark === 1
                    })}
                    onClick={e => {
                        if (replyModalDisplay === 'none') {
                            e.stopPropagation();
                        }
                        setReplyModalDisplay('flex');
                    }}
                    ref={props.reply}
                    disabled={props.audienceCheckMark === 1 ? true : false}>
                        { props.audienceCheckMark === 1
                            ? <ClosePeople/>
                        : <ChooseReply replyCheckMark={replyCheckMark}/> }
                </button>
                <WhoCanReplyModal 
                    handle={props.reply}
                    checkMark={replyCheckMark}
                    setModalDisplay={setReplyModalDisplay}
                    setCheckMark={setReplyCheckMark} 
                    modalDisplay={replyModalDisplay}/>
            </div>
        </div>
    );
};

const IconMenu = () => {
    return (
        <div className='flex flex-row gap-[10px]'>
            <InteractiveIcon icon='picture' title='Медиа'/>
            <InteractiveIcon icon='gif' title='GIF-файл'/>
            <InteractiveIcon icon='list' title='Опрос'/>
            <InteractiveIcon icon='emojismile' title='Эмодзи'/>
        </div>
    );
};

const ProgressBar = (props) => {
    return (
        <div className='relative mr-[10px]'>
            <ProgressBarIcon 
                strokecolor={ props.tweet.length > 0 && props.tweet.length < 190 
                    ? '#0284c7' 
                : props.tweet.length > 189 && props.tweet.length < 210
                    ? '#f6d705' 
                : props.tweet.length > 209 && props.tweet.length < 220
                    ? '#f31814'
                : null }
                strokebg={ props.tweet.length > 0 && props.tweet.length < 220 
                    ? '#efeff6'
                : null }
                dashoffset={`${314-94*(props.tweet.length/210)}`} />
            <div className={classNames('absolute bottom-[50%] right-[50%] text-[12px] translate-x-2/4 translate-y-2/4', {
                'text-red' : props.tweet.length > 209
            })}>
                {props.tweet.length > 189 ? 210-props.tweet.length : null}
            </div>
        </div>
    );
};

const AddTweet = () => {
    return (
        <div className='h-[26px] w-[26px] rounded-[13px] bg-button-gray p-[1px] mr-[20px]'>
            <div className='h-[24px] w-[24px] rounded-[12px] bg-white hover:bg-bg-blue 
            cursor-pointer p-[2px]'>
                <PlusIcon fill='#0284c7' width='20px' height='20px'/>
            </div>
        </div>
    );
};

const ConditionMenu = (props) => {
    return (
        <div className='flex flex-row items-center'>
            <ProgressBar tweet={props.tweet}/>
            <div className='h-[35px] border-r border-button-gray mr-[10px]'></div>
            <AddTweet/>
            <button className={classNames('h-[35px] bg-blue text-white py-[2px] px-[20px] text-[14px] rounded-[16px] font-semibold', {
                    'bg-opacity-[0.5]' : props.tweet === '' || props.tweet.length > 210 })}
                disabled={props.tweet!=='' && props.tweet.length<210 ? false : true}
            >
                Твитнуть
            </button>
        </div>
    );
};

const CreateTweet = () => {

    const [audienceCheckMark, setAudienceCheckMark] = useState(0);
    const [audienceModalDisplay, setAudienceModalDisplay] = useState('none');
    const [tweet, setTweet] = useState('');

    const reply = useRef(null);

    return (
        <div className='w-full flex flex-row gap-[15px] py-[15px] pl-[15px] pr-[30px] border-b-[2px] border-light-gray'>
            <UserAvatar/>
            <div className='w-full pr-[55px]'>
                <div className='border-b-[2px] border-light-gray'>
                    <AudienceButton
                        setAudienceModalDisplay={setAudienceModalDisplay}
                        audienceModalDisplay={audienceModalDisplay}
                        audienceCheckMark={audienceCheckMark}
                        setAudienceCheckMark={setAudienceCheckMark}
                        reply={reply}/>
                    <Textarea
                        tweet={tweet}
                        setTweet={setTweet}/>
                    <WhoCanReplyButton
                        reply={reply}
                        audienceCheckMark={audienceCheckMark}/>
                </div>
                <div className='flex flex-row justify-between items-center mt-[15px]'>
                    <IconMenu/>
                    <ConditionMenu tweet={tweet}/>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;