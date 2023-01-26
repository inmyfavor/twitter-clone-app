import React from 'react';

const ProgressBarIcon = (props) => {
    return (
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" className={props.className}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 
        16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#efeff6"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 
            16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.stroke} 
            stroke-width="2" stroke-dasharray="314" stroke-dashoffset='314'
            // stroke-dasharray="314" stroke-dashoffset='314' transform="scale(1, -1)" stroke-dashoffset='258'
            />
            <circle cx="32" cy="32" r="60" transform="rotate(-90 60 60)" fill="none" 
            stroke-dashoffset="0" stroke-dasharray="314" stroke="#000000" stroke-width="8"/>
        </svg>
    );
};

export default ProgressBarIcon;