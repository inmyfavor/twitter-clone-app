import React from 'react';
import Tab from '../Tab';

const Data = (props) => {
    return (
        <div className='px-[30px]'>
            <h2 className='font-bold text-[24px] mb-[20px]'>Ваши данные в Твиттере</h2>
            <Tab name='Учётная запись' onClick={() => props.setMode('account')}/>
            <Tab name='Приложения, устройства и сведения'/>
            <Tab name='Данные по интересам и рекламе'/>
            <Tab name='Загрузить архив'/>
        </div>
    );
};

export default Data;