import React from 'react';
import Recomendations from './recomendations/Recomendations';
import Search from './Search';
import Settings from './Settings';

const MainPage = () => {
    return (
        <div className='flex flex-col gap-[20px] w-full mx-[200px] pt-[20px] border-x-[2px] border-light-gray'>
            <div className='flex flex-row items-center'>
                <Search/>
                <Settings/>
            </div>
            <Recomendations/>
        </div>
    );
};

export default MainPage;