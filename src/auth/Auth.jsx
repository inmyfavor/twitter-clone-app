import React, { useState } from 'react';
import { HeaderButton } from './Button';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Login2 from './Login2';
import Modal from './Modal';
import Registration from './Registration';
import Registration2 from './Registration2';



const Auth = () => {
    const [display, setDisplay] = useState('none');
    const [mode, setMode] = useState(null);
    const [email, setEmail] = useState('');
    return (
        <div>
            <div className='fixed bottom-0 w-full h-[50px] flex flex-row justify-between items-center bg-blue px-[100px]'>
                <div className='flex flex-col'>
                    <h1 className='text-white text-[16px] font-bold'>Будьте в курсе событий</h1>
                    <div className='text-white text-[12px]'>Пользователи Твиттера узнают новости первыми</div>
                </div>
                <div className='flex flex-row gap-[16px]'>
                    <HeaderButton 
                        name='Войти' 
                        cStyle='border border-white text-white'
                        onClick={() => {setMode('login'); setDisplay('block')}}
                    />
                    <HeaderButton 
                        name='Зарегистрироваться' 
                        cStyle='bg-white'
                        onClick={() => {setMode('registration'); setDisplay('block')}}
                    />
                </div>
            </div>
            <Modal display={display} setDisplay={setDisplay} setEmail={setEmail}>
                { mode === 'login' 
                    ? <Login setMode={setMode} email={email} setEmail={setEmail}/> 
                : mode === 'registration' 
                    ? <Registration setMode={setMode}/> 
                : mode === 'login2' 
                    ? <Login2 setMode={setMode}/>
                : mode === 'registration2'
                    ? <Registration2/>
                : mode === 'forgotPassword'
                    ? <ForgotPassword setMode={setMode} email={email} setEmail={setEmail}/>
                : mode === 'changePassword'
                    ? <ChangePassword/>
                : null }
            </Modal>
        </div>
    );
};

export default Auth;