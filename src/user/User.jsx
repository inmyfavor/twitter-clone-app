import React from 'react';
import PlusIcon from '../icons/PlusIcon';
import CreateTweet from '../tweets/CreateTweet';
import Profile from './profile/Profile';

const User = () => {
    return (
        <div className='w-full max-w-[800px] border-x-[2px] border-light-gray'>
            <Profile/>
            <CreateTweet/>
            <div className='w-[20px] h-[800px]'></div>
            {/* <div className='w-[50px] h-[50px] rounded-[25px] bg-blue fixed top-[50px] left-[120px] cursor-pointer'>
            <img alt='' src='svg/feather.svg' className='absolute m-[15px] rotate-[90deg] scale-x-[-1]'/>
            <PlusIcon fill='#ffffff' width='16px' height='16px' className='m-[8px]'/>
            </div> */}
        </div>
    );
};

export default User;