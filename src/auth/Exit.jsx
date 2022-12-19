import React from 'react';

function exit(setDisplay, setButtonClicked) {
    setDisplay('none');
    setButtonClicked(null);
}

const Exit = (props) => {
    return (
        <img 
            alt='' 
            src='svg/exit.svg' 
            className='absolute top-[20px] right-[20px] cursor-pointer'
            // onClick={()=>props.setDisplay('none')}
            onClick={()=>exit(props.setDisplay, props.setButtonClicked)}
        />
    );
};

export default Exit;