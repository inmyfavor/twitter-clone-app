import classNames from 'classnames';
import React, { useState } from 'react';
import CheckIcon from '../../../icons/CheckIcon';

const Check = (props) => {
    return (
        <div className={classNames('flex flex-col gap-[5px]', props.cstyle)}>
            <div className='flex flex-row justify-between'>
                <div className='text-[16px]'>{props.title}</div>
                <div className={classNames('w-[20px] h-[20px] border-[2px] border-blue rounded-[10px] p-[2px] cursor-pointer', {
                    'bg-blue' : props.selected,
                    'bg-white' : !props.selected
                })}
                onClick={props.onClick}>
                    { props.selected && <CheckIcon width='15px' height='15px' fill='white'/> }
                </div>
            </div>
            <div className='text-[14px] text-gray'>{props.text}</div>
        </div>
    );
};

const Cookie = () => {
    const [allCookie, setAllCookie] = useState(true);
    const [someCookie, setSomeCookie] = useState(false);
    return (
        <div className='px-[30px]'>
            <h2 className='font-bold text-[24px] mb-[20px]'>Настройки файлов cookie</h2>
            <p className='text-[14px] text-gray mb-[20px]'>Twitter совместно с партнёрами использует файлы cookie для того, 
            чтобы сделать пользование своими сервисами более удобным, быстрым и безопасным, а свою коммерческую деятельность — 
            более эффективной. Некоторые файлы cookie являются обязательными для пользования нашими сервисами, так как они помогают 
            нам оптимизировать и улучшать их работу.</p>
            <Check
                title='Принять все файлы cookie'
                text='Разрешить Twitter и его партнёрам использование файлов cookie в целях адаптирования предлагаемой вам рекламы 
                и контактов под ваши предпочтения.'
                cstyle='mb-[15px]'
                selected={allCookie}
                onClick={ someCookie ? () => { setAllCookie(true); setSomeCookie(false) } : null } />
            <Check
                title='Отказаться от несущественных файлов cookie'
                text='Запретить Twitter использование файлов cookie для сбора дополнительных данных в целях адаптирования предлагаемой 
                вам рекламы и контактов под ваши предпочтения.'
                selected={someCookie}
                onClick={ allCookie ? () => { setAllCookie(false); setSomeCookie(true) } : null } />
        </div>
    );
};

export default Cookie;