import React, { useState } from 'react';
import { LinkButton, ModalButton } from './Button';
import { Input } from './Input';

const Registration = (props) => {
    const [email, setEmail] = useState('');
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px] text-center'>Присоединяйтесь к Твиттеру прямо сейчас!</h2>
            <Input
                type='email' 
                placeholder='Введите адрес электронной почты' 
                cStyle='mb-[20px] h-[40px]'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <ModalButton
                name='Далее' 
                cStyle='bg-black text-white'
                onClick={email!=='' ? () => props.setMode('registration2') : null}
            />
            <div className='flex flex-row justify-center gap-[8px] mt-[20px]'>
                <div className='text-[14px]'>Уже зарегистрированы?</div>
                <LinkButton
                    name='Войти'
                    onClick={() => props.setMode('login')}
                />
            </div>
        </div>
    );
};

export default Registration;