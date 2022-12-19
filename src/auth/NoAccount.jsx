import React from 'react';
import { LinkButton } from './Button';

const NoAccount = (props) => {
    return (
        <div className='flex flex-row justify-center gap-[8px] mt-[20px]'>
            <div className='text-[14px]'>Нет учётной записи?</div>
            <LinkButton
                name='Зарегистрируйтесь'
                onClick={() => props.setMode('registration')}
            />
        </div>
    );
};

export default NoAccount;