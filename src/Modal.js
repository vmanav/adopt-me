import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        // Simulating something like comonent did Unmount
        return () => modalRoot.removeChild(elRef.current);
    }, [])
    // EMPTY  arraya of dependencies, ONLY WANT IT TO run once

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;