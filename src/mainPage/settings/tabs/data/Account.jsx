import React from 'react';
import Tab from '../Tab';
import GoBackHeader from './GoBackHeader';

const Account = (props) => {
    return (
        <div className='px-[30px]'>
            <GoBackHeader setMode={props.setMode} title='Сведения об учётной записи'/>
            <Tab name='Языки'/>
            <Tab name='Пол'/>
            <Tab name='Возраст'/>
            <div className='text-[14px] text-gray mt-[10px]'>Данная информация актуальна для вашего 
            браузера или устройства, пока вы не выполнили вход в систему. После входа в 
            систему информация может измениться.</div>
        </div>
    );
};

export default Account;