import React from 'react';
import GeneralWindow from './GeneralWindow';
import Modal from './Modal';

const Pathes = (props) => {
    return (
        <Modal display={props.display} setDisplay={props.setDisplay}>
            <GeneralWindow mode={props.mode}/>
        </Modal>
    );
};

export default Pathes;