import React from 'react';
import Exit from './Exit';

const Modal = (props) => {
    return (
        <div style={{display: props.display}} className='fixed top-0 bottom-0 right-0 left-0 bg-[#06060640]'>
            <div className='absolute top-[50%] mt-[-175px] left-[50%] ml-[-250px]'>
                <div className='w-[500px] h-[350px] flex flex-col items-center justify-center rounded-[16px] bg-white px-[50px]'>
                    <Exit setDisplay={props.setDisplay}/>
                        {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;