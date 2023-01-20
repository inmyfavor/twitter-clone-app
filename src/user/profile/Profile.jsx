import classNames from 'classnames';
import React, { useState } from 'react';
import { HeaderButton } from '../../auth/Button';
import Tweet from '../../tweets/Tweet';

const AccountInfo = (props) => {
    return (
        <div className='flex flex-row items-center gap-[5px]'>
            <img alt='' src={`svg/${props.icon}.svg`}/>
            { props.icon === 'link'
                ? <a href={props.name} className='text-[14px] text-blue underline'>{props.name}</a>
            : <div className='text-gray text-[14px]'>{props.name}</div> }
        </div>
    );
};

const Tab = (props) => {
    return (
        <div 
            className={classNames('w-1/4 h-[60px] text-center py-[20px] text-[14px] font-semibold pb-[10px] px-[8px] cursor-pointer hover:bg-light-gray', {
                'border-b-[4px] border-blue rounded-[2px]' : props.value === props.mode,
                'text-gray' : props.value !== props.mode
            })}
            onClick={()=>props.setMode(props.value)}
        >
            {props.name}
        </div>
    );
};

const Profile = () => {
    const [mode, setMode] = useState('tweets');
    return (
        <div className='flex flex-col'>
            <div className='w-full h-[60px] bg-white flex flex-row gap-[50px] items-center px-[30px]'>
                <img alt='' src='svg/goback.svg' className='w-[20px] h-[20px]'/>
                <div className='flex flex-col'>
                    <div className='font-bold text-[18px]'>Имя</div>
                    <div className='text-gray text-[12px]'>8 625 твитов</div>
                </div>
            </div>
            <div className='relative w-full h-[250px] mb-[20px]'>
                <div className='h-[70%] bg-black'></div>
                <div className='absolute bottom-0 left-[30px] w-[150px] h-[150px] bg-black border-[5px] border-white rounded-[150px]'></div>
                <HeaderButton 
                    cStyle='absolute bottom-[20px] right-[30px] border border-button-gray w-[180px] h-[40px] hover:bg-light-gray' 
                    name='Изменить профиль'
                />
            </div>
            <div className='px-[15px] mb-[20px]'>
                <div className='font-bold text-[18px]'>Имя</div>
                <div className='text-gray text-[14px] mb-[10px]'>@nickname</div>
                <div className='text-[14px] mb-[10px]'>Всем привет, это мой статус!!</div>
                <div className='flex flex-row gap-x-[15px] flex-wrap mb-[10px]'>
                    <AccountInfo icon='location' name='Москва, Россия'/>
                    <AccountInfo icon='link' name='inmyfavor.ru'/>
                    <AccountInfo icon='gift' name='Дата рождения: 16 января'/>
                    <AccountInfo icon='calendar' name='Регистрация: январь 2023'/>
                </div>
                <div className='flex flex-row gap-[20px]'>
                    <div className='text-[14px] text-gray hover:underline cursor-pointer'>
                        <span className='text-black font-bold'>30,8 тыс.</span> в читаемых
                    </div>
                    <div className='text-[14px] text-gray hover:underline cursor-pointer'>
                        <span className='text-black font-bold'>43,6 тыс.</span> читателей
                    </div>
                </div>
            </div>
            <div className='flex flex-row border-b-[2px] border-light-gray'>
                <Tab name='Твиты' mode={mode} setMode={setMode} value='tweets'/>
                <Tab name='Твиты и ответы' mode={mode} setMode={setMode} value='replies'/>
                <Tab name='Медиа' mode={mode} setMode={setMode} value='media'/>
                <Tab name='Нравится' mode={mode} setMode={setMode} value='likes'/>
            </div>
            <Tweet/>
        </div>
    );
};

export default Profile;