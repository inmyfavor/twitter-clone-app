import React from 'react';
import Recomendations from './recomendations/Recomendations';
import Search from './Search';

const MainPage = () => {
    return (
        <div className='flex flex-col gap-[20px] w-full mx-[200px] px-[50px] pt-[20px] border-x-[2px] border-light-gray'>
            <Search/>
            <Recomendations/>
        </div>
    );
};

export default MainPage;