import React from 'react';
import Profile from './profile/Profile';
import UserAvatar from './UserAvatar';

const ReplyCategory = (props) => {
    return (
        <div className='flex flex-row gap-[10px] items-center'>
            <div className='h-[40px] w-[40px] rounded-[20px] bg-blue'></div>
            <div className='font-semibold text-[14px]'>{props.title}</div>
        </div>
    );
};

const WhoCanReply = () => {
    return (
        <div className='h-[300px] w-[350px] flex flex-col bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-[8px] p-[15px]'>
            <div className='text-[16px] font-semibold mb-[5px]'>Кто может отвечать?</div>
            <div className='text-[14px] text-gray mb-[20px]'>
                Выберите, кто может отвечать на этот твит. Упомянутым пользователям эта возможность доступна всегда.
            </div>
            <div className='flex flex-col gap-[15px]'>
                <ReplyCategory title='Все'/>
                <ReplyCategory title='Люди, которых вы читаете'/>
                <ReplyCategory title='Только упомянутые вами пользователи'/>
            </div>
        </div>
    );
};

const CreateTweet = () => {
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
                <div className='ml-[-10px] hover:bg-blue hover:bg-opacity-[0.1] rounded-[8px] h-[24px]'>
                    <div className='text-blue text-[14px] px-[10px]'>Отвечать могут все пользователи</div>
                </div>
                <WhoCanReply/>
            </div>
        </div>
    );
};

const User = () => {
    return (
        <div className='w-full'>
        <div className='w-[50px] h-[50px] rounded-[25px] bg-blue fixed top-[50px] left-[120px] cursor-pointer'>
            <img alt='' src='svg/feather.svg' className='absolute m-[15px] rotate-[90deg] scale-x-[-1]'/>
            <img alt='' src='svg/plus.svg' className='m-[8px]'/>
        </div>
        <div className='flex flex-col mx-[200px] border-x-[2px] border-light-gray'>
            <Profile/>
            <CreateTweet/>
            <div className='w-[20px] h-[800px]'></div>
        </div>
    </div>
    );
};

export default User;