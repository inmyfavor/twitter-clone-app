import React from 'react';
import { LinkButton } from '../../auth/Button';
import Recomendation from './Recomendation';

const recomendations = [
    { id: 1, title: 'Jesus', amount: 443000 },
    { id: 2, title: 'Weihnachtsbaum', amount: 1954 },
    { id: 3, title: 'Emily', amount: 62100 },
    { id: 4, title: 'New Year', amount: 272000},
];

const Recomendations = () => {
    return (
        <div>
            <h2 className='font-bold text-[24px] mb-[10px]'>Актуальные темы для вас</h2>
            <div className='flex flex-col gap-[10px] mb-[10px]'>
                {recomendations.map(rec => <Recomendation key={'rec:'+rec.id} {...rec}/>)}
            </div>
            <LinkButton name='Показать ещё'/>
        </div>
    );
};

export default Recomendations;