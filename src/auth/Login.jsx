import React from 'react';
import { ModalButton } from './Button';
import Input from './Input';
import NoAccount from './NoAccount';

const Login = (props) => {
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px] text-center'>Вход в Твиттер</h2>
            <Input 
                type='email' 
                placeholder='Введите адрес электронной почты' 
                cStyle='mb-[20px] h-[40px]'
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
            />
            <ModalButton
                name='Далее' 
                cStyle='bg-black text-white'
                onClick={props.email!=='' ? () => props.setMode('login2') : null}
            />
            <ModalButton
                name='Забыли пароль?'
                cStyle='border border-gray mt-[10px]'
                onClick={() => props.setMode('forgotPassword')}
            />
            <NoAccount setMode={props.setMode}/>
        </div>
    );
};

export default Login;