import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
    // useref Hook
    const elRef = useRef(null);

    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        // Simulating something like comonent did Unmount
        // for CleanUp
        return () => modalRoot.removeChild(elRef.current);
    }, [])
    // Empty Dependency Array => ONLY WANT IT TO RUN `ONCE`

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;