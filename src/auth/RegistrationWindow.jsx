import React from 'react';
import Modal from './Modal';

const RegistrationWindow = (props) => {
    return (
        <Modal display={props.display} setDisplay={props.setDisplay}>
        </Modal>
    );
};

export default RegistrationWindow;