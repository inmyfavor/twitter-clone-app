import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';

const Modal = (props) => {
    const modal = useRef(null);
    function close() {
        modal.current.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], 200)
        setTimeout(() => {
            props.setModalDisplay('none');
        }, 200);
    }
    useEffect(() => {
        console.log(props.modalDisplay)
        const onClick = e => (props.handle.current.contains(e.target) && props.modalDisplay === 'none') || close();
        const onScroll = () => close();
        document.addEventListener('click', onClick);
        document.addEventListener('scroll', onScroll);
        modal.current.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], 200);
        return () => {
            document.removeEventListener('click', onClick);
            document.removeEventListener('scroll', onScroll);
        }
    }, [props.modalDisplay]);
    return (
        <div className={classNames('absolute flex-col bg-white',
            'shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-[16px] py-[15px] z-10', props.className)}
            style={{display: props.modalDisplay}} 
            ref={modal}>
                {props.children}
        </div>
    );
};

export default Modal;