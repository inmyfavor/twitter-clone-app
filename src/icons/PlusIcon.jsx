import React from 'react';

const PlusIcon = (props) => {
    return (
        <svg fill={props.fill} width={props.width} height={props.height} viewBox="-7 0 32 32" 
        className={props.className}>
            <path d="M17.040 15.16h-7.28v-7.24c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 
            0.84v7.28h-7.24c-0.48-0.040-0.84 0.32-0.84 0.8s0.36 0.84 0.84 0.84h7.28v7.28c0 
            0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-7.32h7.28c0.48 0 0.84-0.36 
            0.84-0.84s-0.44-0.8-0.88-0.8z" stroke={props.fill} stroke-width='1'></path>
        </svg>
    );
};

export default PlusIcon;