import React from 'react';
import CreateTweet from '../tweets/CreateTweet';
import Profile from './profile/Profile';

// const ReplyCategory = (props) => {
//     return (
//         <div className='h-[60px] flex flex-row items-center justify-between hover:bg-light-gray hover:bg-opacity-[0.5] px-[20px] cursor-pointer'
//         onClick={() => props.setCheckMark(props.value)}>
//             <div className='flex flex-row gap-[10px] items-center'>
//                 <div className='h-[40px] w-[40px] rounded-[20px] bg-blue p-[8px]'>{props.icon}</div>
//                 <div className='font-semibold text-[14px]'>{props.title}</div>
//             </div>
//             { props.value === props.checkMark &&
//             <CheckIcon width='14px' height='14px' fill='#0284c7' className='flex shrink-0 justify-self-end'/> }
//         </div>
//     );
// };

// const replyCategory = [
//     'Отвечать могут все пользователи', 
//     'Отвечать могут пользователи, которых вы читаете', 
//     'Отвечать могут только пользователи, которых вы упоминаете'
// ];

// const replyIcons = [
//     <WorldIcon width='16px' height='16px' fill='#0284c7'/>,
//     <FollowUserIcon width='16px' height='16px' fill='#0284c7'/>,
//     <AtSignIcon width='16px' height='16px' fill='#0284c7'/>
// ];

// const WhoCanReplyModal = (props) => {
//     return (
//         <div className='h-[320px] w-[360px] flex flex-col bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-[16px] py-[15px]'>
//             <div className='text-[16px] font-semibold mb-[5px] px-[20px]'>Кто может отвечать?</div>
//             <div className='text-[14px] text-gray mb-[20px] px-[20px]'>
//                 Выберите, кто может отвечать на этот твит. Упомянутым пользователям эта возможность доступна всегда.
//             </div>
//             <div className='flex flex-col'>
//                 <ReplyCategory 
//                     title='Все' 
//                     icon={ <WorldIcon width='24px' height='24px' fill='white'/> }
//                     checkMark={props.checkMark}
//                     setCheckMark={props.setCheckMark}
//                     value={0}/>
//                 <ReplyCategory 
//                     title='Люди, которых вы читаете' 
//                     icon={ <FollowUserIcon width='24px' height='24px' fill='white'/> }
//                     checkMark={props.checkMark}
//                     setCheckMark={props.setCheckMark}
//                     value={1}/>
//                 <ReplyCategory 
//                     title='Только упомянутые вами пользователи' 
//                     icon={ <AtSignIcon width='24px' height='24px' fill='white'/> }
//                     checkMark={props.checkMark}
//                     setCheckMark={props.setCheckMark}
//                     value={2}/>
//             </div>
//         </div>
//     );
// };

// const CreateTweet = () => {
//     const [checkMark, setCheckMark] = useState(0);
//     return (
//         <div className='flex flex-row gap-[15px] p-[15px] border-b-[2px] border-light-gray'>
//             <UserAvatar/>
//             <div className='flex flex-col'>
//                 <div className='relative h-[24px] w-[60px] mb-[20px]'>
//                     <button className='w-full h-full border border-button-gray text-[14px] pr-[20px] rounded-[10px] text-blue hover:bg-blue hover:bg-opacity-[0.1]'>
//                         Все
//                     </button>
//                     <img alt='' src='svg/forwardarrow.svg' className='absolute top-[6px] right-[8px] w-[16px] h-[16px] rotate-90 pointer-events-none'/>
//                 </div>
//                 <div className='text-[18px] text-gray mb-[10px]'>Что происходит?</div>
//                 <div className='flex flex-row gap-[8px] items-center ml-[-10px] hover:bg-blue hover:bg-opacity-[0.1] rounded-[8px] h-[24px] px-[10px]'>
//                     {replyIcons[checkMark]}
//                     <div className='text-blue text-[14px]'>{replyCategory[checkMark]}</div>
//                 </div>
//                 <WhoCanReplyModal checkMark={checkMark} setCheckMark={setCheckMark}/>
//             </div>
//         </div>
//     );
// };

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