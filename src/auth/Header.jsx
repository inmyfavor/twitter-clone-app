import React, { useState } from 'react';
import { HeaderButton } from './Button';
import Pathes from './Pathes';



const Header = () => {
    const [display, setDisplay] = useState('none');
    const [mode, setMode] = useState(null);
    return (
        <div>
            <div className='fixed w-full h-[50px] flex flex-row justify-between items-center bg-blue px-[100px]'>
                <div className='flex flex-col '>
                    <h1 className='text-white text-[16px] font-bold'>Будьте в курсе событий</h1>
                    <div className='text-white text-[12px]'>Пользователи Твиттера узнают новости первыми</div>
                </div>
                <div className='flex flex-row gap-[16px]'>
                    <HeaderButton 
                        name='Войти' 
                        cStyle='border border-white text-white'
                        onClick={()=>{setMode('login'); setDisplay('block')}}
                    />
                    <HeaderButton 
                        name='Зарегистрироваться' 
                        cStyle='bg-white'
                        onClick={()=>{setMode('registration'); setDisplay('block')}}
                    />
                </div>
            </div>
            { mode && <Pathes mode={mode} display={display} setDisplay={setDisplay}/> }
        </div>
    );
};

export default Header;