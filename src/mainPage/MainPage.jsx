import React, { useState } from 'react';
import FilledSearchIcon from '../icons/FilledSearchIcon';
import SearchIcon from '../icons/SearchIcon';
import FilledSettingsIcon from '../icons/FilledSettingsIcon';
import SettingsIcon from '../icons/SettingsIcon';
import Search from './search/Search';
import Settings from './settings/Settings';

function onIconClicked(icon, setIcon) {
    if (icon === 'search') {
        setIcon('settings');
    }
    else if (icon === 'settings') {
        setIcon('search');
    }
}

const MainPage = () => {
    const [icon, setIcon] = useState('search');
    return (
        <div className='w-full'>
            <div 
                className='w-[24px] h-[24px] fixed top-[50px] left-[150px] cursor-pointer'
                onClick={() => onIconClicked(icon, setIcon)}>
                    {icon === 'search' ? <FilledSearchIcon/> : <SearchIcon/>}
            </div>
            <div
                className='w-[24px] h-[24px] fixed top-[110px] left-[150px] cursor-pointer'
                onClick={() => onIconClicked(icon, setIcon)}>
                    {icon === 'settings' ? <FilledSettingsIcon/> : <SettingsIcon/>}
            </div>
            <div className='flex flex-col gap-[20px] mx-[200px] border-x-[2px] border-light-gray'>
                { icon === 'search'
                    ? <Search/>
                : icon === 'settings'
                    ? <Settings/>
                : null }
            </div>
            <div className='h-[50000px] bg-black w-[20px]'></div>
        </div>
    );
};

export default MainPage;