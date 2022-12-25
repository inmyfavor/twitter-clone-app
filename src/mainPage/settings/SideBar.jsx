import React, { useState } from 'react';
import classNames from 'classnames';

const Tab = (props) => {
    const [selected, setSelected] = useState(false);
    return (
        <div className={classNames(
            'h-[60px] flex flex-row justify-between items-center', {
                'bg-light-gray border-r-[3px] border-blue pl-[50px] pr-[47px]' : selected === true,
                'px-[50px]' : selected === false
            })}
            onClick={() => setSelected(true)}>
            <div className='text-[16px]'>{props.name}</div>
            <img alt='' src='svg/forwardarrow.svg' className='w-[24px] h-[24px]'/>
        </div>
    );
};

const SideBar = () => {
    return (
        <div className='w-[40%] border-r-[2px] border-light-gray pt-[20px]'>
            <h2 className='font-bold text-[24px] mb-[20px] px-[50px]'>Настройки</h2>
            <h5 className='font-bold text-[20px] mb-[20px] px-[50px]'>Конфиденциальность</h5>
            <div className='flex flex-col pb-[20px] border-b-[2px] border-light-gray'>
                <Tab name='Персонализация и данные'/>
                <Tab name='Ваши данные в Твиттере'/>
                <Tab name='Настройки файлов cookie'/>
                <div className='text-[16px] text-gray px-[50px] mt-[10px]'>Эти настройки действуют в данном браузере или на данном устройстве, 
                до тех пор пока вы не выполнили вход в систему. После входа в систему они перестанут действовать.</div>
            </div>
            <h5 className='font-bold text-[20px] mb-[10px] px-[50px] pt-[20px] mb-[21px]'>Общие</h5>
            <Tab name='Дополнительные ресурсы'/>
        </div>
    );
};

export default SideBar;