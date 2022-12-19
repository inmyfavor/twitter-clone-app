import classNames from 'classnames';
import React, { useState } from 'react';
import { ModalButton } from './Button';
import Input from './Input';
import Select from './Select';

const months = [ 
    { value: 0, name: 'января' }, 
    { value: 1, name: 'февраля' }, 
    { value: 2, name: 'марта' }, 
    { value: 3, name: 'апреля' }, 
    { value: 4, name: 'мая' }, 
    { value: 5, name: 'июня' }, 
    { value: 6, name: 'июля' }, 
    { value: 7, name: 'августа' }, 
    { value: 8, name: 'сентября' }, 
    { value: 9, name: 'октября' }, 
    { value: 10, name: 'ноября' }, 
    { value: 11, name: 'декабря' }
];

const date = new Date();
const curYear = date.getFullYear();
const days = Array.from({ length: 31 }, (day, index) => index+1);
const years = Array.from({ length: 100 }, (day, index) => curYear-index);

const Registration2 = (props) => {
    const [focused, setFocused] = useState(null);
    const [name, setName] = useState('');
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px]'>Создайте учётную запись</h2>
            <div className='relative mb-[10px]' onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}>
                <Input 
                    cStyle='mb-[5px] h-[60px] pr-[60px] pt-[35px]'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <span className={classNames('absolute top-[18px] left-[20px] transition ease-in-out duration-100 pointer-events-none', {
                    'text-gray text-[16px]' : focused !== 'name', 
                    '-translate-y-[13px] -translate-x-[8px] text-blue text-[12px]' : focused === 'name' || name !== ''})}>
                        Имя
                </span>
            </div>
            <h5 className='font-bold text-[16px] mb-[5px]'>Дата рождения</h5>
            <div className='text-[12px] text-gray leading-4 mb-[10px]'>Эта информация не будет общедоступной. Подтвердите свой возраст, 
            даже если эта учётная запись предназначена для компании, домашнего животного и т.д.</div>
            <div className='flex flex-row gap-[10px] mb-[20px]'>
                <Select 
                    name='day' 
                    title='День' 
                    cStyle='w-[20%]' 
                    focused={focused} 
                    focusedOn='day' 
                    onFocus={() => setFocused('day')} 
                    setFocused={setFocused}
                >
                    {days.map(day => <option value={day}>{day}</option>)}
                </Select>
                <Select 
                    name='month' 
                    title='Месяц' 
                    cStyle='w-[50%]' 
                    focused={focused} 
                    focusedOn='month' 
                    onFocus={() => setFocused('month')} 
                    setFocused={setFocused}
                >
                    {months.map(month => <option value={month.value}>{month.name}</option>)}
                </Select>
                <Select 
                    name='year' 
                    title='Год' 
                    cStyle='w-[30%]' 
                    focused={focused} 
                    focusedOn='year' 
                    onFocus={() => setFocused('year')} 
                    setFocused={setFocused}
                >
                    {years.map(year => <option value={year}>{year}</option>)}
                </Select>
            </div>
            <ModalButton
                name='Далее' 
                cStyle='bg-black text-white'
            />
        </div>
    );
};

export default Registration2;