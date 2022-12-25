import classNames from 'classnames';
import React, { useState } from 'react';
import ExitIcon from '../../icons/ExitIcon';
import SearchIcon from '../../icons/SearchIcon';

const SearchBox = () => {
    const [focused, setFocused] = useState(null);
    const [request, setRequest] = useState('');
    return (
        <div className='relative h-[40px] w-[90%]' onFocus={() => setFocused('search')} onBlur={() => setFocused(null)}>
            <input 
                className={classNames('h-full w-full rounded-[16px] outline-blue pl-[52px] pr-[40px] leading-[4] placeholder:text-gray', {
                'bg-light-gray' : focused !== 'search',
                'bg-white' : focused === 'search'
                })}
                placeholder='Поиск в Твиттере'
                value={request}
                onChange={(e) => setRequest(e.target.value)}
            />
            <SearchIcon fill='#6b7280' width='20px' height='20px' className='absolute top-[10px] left-[20px]'/>
            { focused === 'search' &&
            <div 
                className='absolute top-[10px] right-[10px] bg-blue h-[20px] w-[20px] rounded-[20px] p-[5px] cursor-pointer'
                onClick={() => setRequest('')}
            >
                <ExitIcon fill='#ffffff' width='10px' height='10px'/>
            </div> }
        </div>
    );
};

export default SearchBox;