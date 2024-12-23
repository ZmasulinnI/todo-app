import { createPortal } from 'react-dom';

const portal = document.getElementById('portal-root')

const Modal = ({children, visible}) => {
    return createPortal(
        <div className={`top-0 absolute w-full h-full bg-gray-700/25 flex items-center justify-center ${!visible&&'hidden'}`}>
            {children}
        </div>,
        portal
    )
}

export default Modal