import React, { useState } from 'react';
import { ModalButton } from './Button';
import { FocusedInput } from './Input';
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

const Registration2 = () => {
    const [name, setName] = useState('');
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[20px]'>Создайте учётную запись</h2>
            <FocusedInput value={name} setValue={setName} title='Имя'/>
            <h5 className='font-bold text-[16px] mb-[5px]'>Дата рождения</h5>
            <div className='text-[12px] text-gray leading-4 mb-[10px]'>Эта информация не будет общедоступной. Подтвердите свой возраст, 
            даже если эта учётная запись предназначена для компании, домашнего животного и т.д.</div>
            <div className='flex flex-row gap-[10px] mb-[20px]'>
                <Select 
                    name='day' 
                    title='День' 
                    cStyle='w-[20%]' 
                    focusedOn='day'
                >
                    {days.map(day => <option value={day}>{day}</option>)}
                </Select>
                <Select 
                    name='month' 
                    title='Месяц' 
                    cStyle='w-[50%]'
                    focusedOn='month'
                >
                    {months.map(month => <option value={month.value}>{month.name}</option>)}
                </Select>
                <Select 
                    name='year' 
                    title='Год' 
                    cStyle='w-[30%]' 
                    focusedOn='year'
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