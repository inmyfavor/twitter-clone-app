import classNames from 'classnames';
import React, { useState } from 'react';
import { ModalButton } from './Button';
import Input from './Input';

const ForgotPassword = (props) => {
    const [focused, setFocused] = useState(null);
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[10px] leading-7'>Найдите свою учётную запись в Твиттере</h2>
            <div className='text-[12px] text-gray leading-4 mb-[20px]'>Чтобы изменить пароль, введите адрес 
            электронной почты, связанный с вашей учётной записью.</div>
            <div className='relative mb-[30px]' onFocus={() => setFocused('email')} onBlur={()=>setFocused(null)}>
                <Input 
                    cStyle='mb-[5px] h-[60px] pr-[60px] pt-[35px]'
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                />
                <div className={classNames('absolute top-[18px] left-[20px] transition ease-in-out duration-100 pointer-events-none', {
                    'text-gray text-[16px]' : focused !== 'email', 
                    '-translate-y-[13px] -translate-x-[8px] text-blue text-[12px]' : focused === 'email' || props.email !== ''})}>
                        Адрес электронной почты
                </div>
            </div>
            <ModalButton
                name='Далее' 
                cStyle='bg-black text-white'
                onClick={props.email!=='' ? () => props.setMode('changePassword') : null}
            />
        </div>
    );
};

export default ForgotPassword;