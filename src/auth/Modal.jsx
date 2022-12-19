import React from 'react';
import Exit from './Exit';

const Modal = (props) => {
    return (
        <div style={{display: props.display}} className='fixed top-0 bottom-0 right-0 left-0 bg-[#06060640]'>
            <div className='absolute top-[50%] mt-[-225px] left-[50%] ml-[-250px]'>
                <div className='w-[500px] h-[450px] flex flex-col justify-center rounded-[16px] bg-white p-[50px]'>
                    <Exit setDisplay={props.setDisplay} setEmail={props.setEmail}/>
                        {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;