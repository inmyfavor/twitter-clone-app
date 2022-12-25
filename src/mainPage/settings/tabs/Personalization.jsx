import classNames from 'classnames';
import React, { useState } from 'react';

const Check = (props) => {
    const [selected, setSelected] = useState(true);
    return (
        <div className={classNames('flex flex-col gap-[10px] px-[30px]', props.cstyle)}>
            <div className='flex flex-row justify-between'>
                <div className='text-[16px]'>{props.title}</div>
                <div className={classNames('w-[20px] h-[20px] border-[2px] border-blue rounded-[5px] p-[2px] cursor-pointer', {
                    'bg-blue' : selected === true,
                    'bg-white' : selected === false
                })}
                onClick={selected === true ? () => setSelected(false) : () => setSelected(true)}>
                    <img alt='' src='svg/check.svg'/>
                </div>
            </div>
            <div className='text-[14px] text-gray'>{props.text}</div>
        </div>
    );
};

const Personalization = () => {
    const [selector, setSelector] = useState(true);
    return (
        <div className='w-[60%] pt-[20px]'>
            <h2 className='font-bold text-[24px] mb-[20px] px-[30px]'>Персонализация и данные</h2>
            <div className='text-[14px] text-gray pb-[15px] border-b-[2px] border-light-gray px-[30px]'>Эти настройки 
            действуют в данном браузере или на данном устройстве, до тех пор пока вы не выполнили вход в систему. 
            После входа в систему они перестанут действовать.</div>
            <div className='flex flex-row justify-between px-[30px] pt-[15px] mb-[10px]'>
                <div className='text-[16px]'>Персонализация и данные</div>
                <div className={classNames(
                    'h-[24px] w-[40px] p-[1px] border-[2px] border-blue rounded-[15px] cursor-pointer duration-300 ease-in-out', {
                    'bg-white' : selector === false,
                    'bg-blue' : selector === true
                })}
                onClick={selector === true ? () => setSelector(false) : () => setSelector(true)}>
                    <div className={classNames('h-[18px] w-[18px] rounded-[20px]', {
                        'bg-blue' : selector === false,
                        'bg-white translate-x-[16px]' : selector === true
                    })}></div>
                </div>
            </div>
            <div className='text-[14px] text-gray px-[30px] pb-[15px] border-b-[2px] border-light-gray'>Этот переключатель 
            включить или отключить все настройки на данной странице.</div>
            <h5 className='font-bold text-[20px] mb-[20px] px-[30px] pt-[15px]'>Персонализация</h5>
            <Check 
            title='Персонализированные рекламные объявления' 
            text='Вы всегда видите в Твиттере рекламные объявления, подобранные с учётом ваших действий в Твиттере. 
            Если этот параметр включён, Твиттер также может подбирать для вас персонализированные рекламные 
            объявления от своих рекламодателей как на страницах Твиттера, так и на других сайтах на основе 
            данных о ваших действиях в сети и информации от наших партнёров.'
            cstyle='mb-[10px]' />
            <Check
            title='Персонализировать на основе предполагаемой личности'
            text='Твиттер всегда персонализирует то, что вы видите на основе информации, которую вы предоставили, и 
            устройств, используемых для входа. Если этот параметр активирован, Твиттер также может выполнять персонализацию 
            на основе предположений о вашей личности, таких как устройства и браузеры, которые вы не использовали для 
            входа в Твиттер, или адреса электроннной почты и номера телефонов, похожие на те, что связаны с вашей учётной 
            записью в Твиттере.'
            cstyle='pb-[20px] border-b-[2px] border-light-gray'/>
            <h5 className='font-bold text-[20px] mb-[20px] px-[30px] pt-[15px]'>Данные</h5>
            <Check
            title='Разрешить предоставлять деловым партнёрам дополнительную информацию'
            text='Твиттер всегда предоставляет информацию своим деловым партнёрам, что позволяет ему обеспечивать работу 
            своих продуктов и улучшать их. Если эта настройка включена, Твиттер может предоставлять своим партнёром 
            дополнительную информацию, которая помогает ему вести бизнес, в тои числе персонализировать для вас 
            маркетинговые мероприятия Твиттера на других сайтах и приложениях.' />
        </div>
    );
};

export default Personalization;