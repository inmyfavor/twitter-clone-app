import React from 'react';
import SettingsIcon from '../../icons/SettingsIcon';
import Recomendations from './recomendations/Recomendations';
import SearchBox from './SearchBox';

const Search = () => {
    return (
        <div>
            <div className='fixed top-0 right-[202px] left-[202px] flex flex-row items-center mb-[20px] px-[50px] py-[20px] bg-white z-10'>
                <SearchBox/>
                <div className='w-[10%] flex justify-center'>
                    <SettingsIcon className='w-[20px] h-[20px] cursor-pointer'/>
                </div>
            </div>
            <Recomendations/>
        </div>
    );
};

export default Search;