import React from 'react';
import { ModalButton } from './Button';
import { FocusedInput } from './Input';

const ForgotPassword = (props) => {
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[10px] leading-7'>Найдите свою учётную запись в Твиттере</h2>
            <div className='text-[12px] text-gray leading-4 mb-[20px]'>Чтобы изменить пароль, введите адрес 
            электронной почты, связанный с вашей учётной записью.</div>
            <FocusedInput value={props.email} setValue={props.setEmail} title='Адрес электронной почты'/>
            <ModalButton
                name='Далее' 
                cStyle='bg-black text-white'
                onClick={props.email!=='' ? () => props.setMode('changePassword') : null}
            />
        </div>
    );
};

export default ForgotPassword;