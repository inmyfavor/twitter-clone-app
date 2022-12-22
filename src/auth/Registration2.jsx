import React, { useState } from 'react';
import { ModalButton } from './Button';
import { FocusedInput } from './Input';
import Select from './Select';

const months = [ 
    { value: 0, name: 'января', days: 31 }, 
    { value: 1, name: 'февраля', days: 28 }, 
    { value: 2, name: 'марта', days: 31 }, 
    { value: 3, name: 'апреля', days: 30 }, 
    { value: 4, name: 'мая', days: 31 }, 
    { value: 5, name: 'июня', days: 30 }, 
    { value: 6, name: 'июля', days: 31 }, 
    { value: 7, name: 'августа', days: 31 }, 
    { value: 8, name: 'сентября', days: 30 }, 
    { value: 9, name: 'октября', days: 31 }, 
    { value: 10, name: 'ноября', days: 30 }, 
    { value: 11, name: 'декабря', days: 31 }
];

const date = new Date();
const curYear = date.getFullYear();
const years = Array.from({ length: 100 }, (day, index) => curYear-index);

const Registration2 = () => {
    const [name, setName] = useState('');
    const [daysNum, setDaysNum] = useState(31);
    const [leapYear, setLeapYear] = useState(curYear);

    const days = Array.from(
        { length: (daysNum===28 && leapYear%4===0 && (leapYear%400===0 || leapYear%100!==0)) ? daysNum+1 : daysNum}, 
        (day, index) => index+1
    );

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
                    {months.map(month => <option onClick={() => setDaysNum(month.days)} value={month.value}>{month.name}</option>)}
                </Select>
                <Select 
                    name='year' 
                    title='Год' 
                    cStyle='w-[30%]' 
                    focusedOn='year'
                >
                    {years.map(year => <option onClick={() => setLeapYear(year)} value={year}>{year}</option>)}
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