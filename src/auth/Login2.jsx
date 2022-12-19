import React, { useState } from 'react';
import { LinkButton, ModalButton } from './Button';
import NoAccount from './NoAccount';
import Password from './Password';

const Login2 = (props) => {
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px]'>Введите пароль</h2>
            <Password 
                password={password} 
                setPassword={setPassword} 
                title='Пароль'
            />
            <LinkButton
                name='Забыли пароль?'
                onClick={() => props.setMode('forgotPassword')}
            />
            <ModalButton
                name='Войти' 
                cStyle='bg-black text-white mt-[30px]'
            />
            <NoAccount setMode={props.setMode}/>
        </div>
    );
};

export default Login2;