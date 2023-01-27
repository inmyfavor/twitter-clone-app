import React from 'react';

const ProgressBarIcon = (props) => {
    return (
        <svg width="26px" height="26px" viewBox="0 0 32 32" className={props.className}>
            <circle cx="16" cy="16" r="15" fill='none' stroke={props.strokebg} strokeWidth='2'/>
            <circle cx="16" cy="16" r="15" fill='none' stroke={props.strokecolor} strokeWidth='2'
            stroke-dasharray="314" stroke-dashoffset={props.dashoffset} transform='rotate(-90 16 16)'/>
        </svg>
    );
};

export default ProgressBarIcon;