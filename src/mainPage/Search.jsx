import classNames from 'classnames';
import React, { useState } from 'react';
import ExitIcon from '../icons/ExitIcon';

const Search = () => {
    const [focused, setFocused] = useState(null);
    const [request, setRequest] = useState('');
    return (
        <div className='relative h-[40px] w-[80%] pl-[50px]' onFocus={() => setFocused('search')} onBlur={() => setFocused(null)}>
            <input 
                className={classNames('h-full w-full rounded-[16px] outline-blue pl-[52px] pr-[40px] leading-[4] placeholder:text-gray', {
                'bg-light-gray' : focused !== 'search',
                'bg-white' : focused === 'search'
                })}
                placeholder='Поиск в Твиттере'
                value={request}
                onChange={(e) => setRequest(e.target.value)}
            />
            <img 
                alt='' 
                src='svg/search.svg'
                className='absolute top-[12px] left-[70px]'
            />
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

export default Search;