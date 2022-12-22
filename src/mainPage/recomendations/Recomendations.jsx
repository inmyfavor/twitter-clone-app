import React, { useState } from 'react';
import { LinkButton } from '../../auth/Button';
import Recomendation from './Recomendation';

const recomendations = [
    { id: 1, title: 'Jesus', amount: 443000 },
    { id: 2, title: 'Weihnachtsbaum', amount: 1954 },
    { id: 3, title: 'Emily', amount: 62100 },
    { id: 4, title: 'New Year', amount: 272000},
];

const Recomendations = () => {
    const [recs, setRecs] = useState(recomendations);

    function removeRec(id) {
        setRecs(recs => recs.filter(elem => elem.id !== id));
    }

    return (
        <div className='pb-[20px] px-[50px] border-b-[2px] border-light-gray'>
            <h2 className='font-bold text-[24px] mb-[10px]'>Актуальные темы для вас</h2>
            <div className='flex flex-col gap-[10px] mb-[20px]'>
                {recs.map(rec => <Recomendation onClick={() => removeRec(rec.id)} key={'rec:'+rec.id} {...rec}/>)}
            </div>
            <LinkButton name='Показать ещё'/>
        </div>
    );
};

export default Recomendations;