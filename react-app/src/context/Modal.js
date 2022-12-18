// frontend/src/context/Modal.js
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;
    // console.log("coming from moda", children.props.portalClassName)
    return ReactDOM.createPortal(
        <div id="modal">
            <div id={children.props.portalClassName ? "ResponseModal":"modal-background"} onClick={onClose} />
            <div id={children.props.portalClassName ? "ResponseModalContent":"modal-content"} >
                {children}
            </div>
        </div>,
        modalNode
    );
}
