import React from 'react';

const FilledSearchIcon = (props) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M16 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="#000"/>
        <path d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11Zm9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" fill="#000"/>
        </svg>
    );
};

export default FilledSearchIcon;