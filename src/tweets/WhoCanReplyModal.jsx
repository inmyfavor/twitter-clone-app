import React from 'react';
import AtSignIcon from '../icons/AtSignIcon';
import FollowUserIcon from '../icons/FollowUserIcon';
import WorldIcon from '../icons/WorldIcon';
import Category from './Category';
import Modal from './Modal';

const WhoCanReplyModal = (props) => {
    return (
        <Modal 
            setModalDisplay={props.setModalDisplay} 
            modalDisplay={props.modalDisplay} 
            handle={props.handle}
            className='top-[35px] h-[320px] w-[360px]'>
            <div className='text-[16px] font-semibold mb-[5px] px-[20px]'>
                Кто может отвечать?
            </div>
            <div className='text-[14px] text-gray mb-[20px] px-[20px]'>
                Выберите, кто может отвечать на этот твит. Упомянутым пользователям эта возможность доступна всегда.
            </div>
            <div className='flex flex-col'>
                <Category
                    title='Все' 
                    icon={ <WorldIcon width='24px' height='24px' fill='white'/> }
                    checkMark={props.checkMark}
                    setCheckMark={props.setCheckMark}
                    value={0}
                    className='bg-blue'/>
                <Category 
                    title='Люди, которых вы читаете' 
                    icon={ <FollowUserIcon width='24px' height='24px' fill='white'/> }
                    checkMark={props.checkMark}
                    setCheckMark={props.setCheckMark}
                    value={1}
                    className='bg-blue'/>
                <Category 
                    title='Только упомянутые вами пользователи' 
                    icon={ <AtSignIcon width='24px' height='24px' fill='white'/> }
                    checkMark={props.checkMark}
                    setCheckMark={props.setCheckMark}
                    value={2}
                    className='bg-blue'/>
            </div>
        </Modal>
    );
};

export default WhoCanReplyModal;