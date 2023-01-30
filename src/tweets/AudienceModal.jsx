import React, { useState } from 'react';
import FavouriteUserIcon from '../icons/FavouriteUserIcon';
import WorldIcon from '../icons/WorldIcon';
import Category from './Category';
import Modal from './Modal';

const AudienceModal = (props) => {
    return (
        <Modal 
            setModalDisplay={props.setModalDisplay} 
            modalDisplay={props.modalDisplay} 
            handle={props.handle}
            className='w-[300px] h-[180px] top-[35px] left-[-110px]'>
            <div className='text-[16px] font-semibold mb-[5px] px-[20px]'>
                Выберите аудиторию
            </div>
            <Category
                title='Все' 
                icon={ <WorldIcon width='24px' height='24px' fill='white'/> }
                checkMark={props.checkMark}
                setCheckMark={props.setCheckMark}
                value={0}
                className='bg-blue' />
            <Category
                title='Близкий круг в Twitter' 
                icon={ <FavouriteUserIcon/> }
                checkMark={props.checkMark}
                setCheckMark={props.setCheckMark}
                value={1}
                className='bg-green' />
        </Modal>
    );
};

export default AudienceModal;