import React from 'react';
import Profile from './profile/Profile';
import UserAvatar from './UserAvatar';

const CreateTweet = () => {
    return (
        <div className='flex flex-row gap-[15px] p-[15px] border-b-[2px] border-light-gray'>
            <UserAvatar/>
            <div className='w-full flex flex-col'>
                <div className='relative h-[24px] w-[60px] mb-[20px]'>
                    <button className='w-full h-full border border-button-gray text-[14px] pr-[20px] rounded-[10px] text-blue hover:bg-blue hover:bg-opacity-[0.1]'>
                        Все
                    </button>
                    <img alt='' src='svg/forwardarrow.svg' className='absolute top-[6px] right-[8px] w-[16px] h-[16px] rotate-90 pointer-events-none'/>
                </div>
                
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