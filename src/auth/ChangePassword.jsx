import React, { useState } from 'react';
import { ModalButton } from './Button';
import Password from './Password';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px]'>Введите новый пароль</h2>
            <Password 
                password={password} 
                setPassword={setPassword} 
                title='Пароль' 
                cStyle='mb-[20px]'
            />
            <Password 
                password={repeatPassword} 
                setPassword={setRepeatPassword} 
                title='Повторите пароль'
            />
            <ModalButton
                name='Изменить пароль' 
                cStyle='bg-black text-white mt-[30px]'
            />
        </div>
    );
};

export default ChangePassword;