import React from 'react';
import { Button } from "@/components/ui/button"

const ButtonWrapp = ({children, style, onClick, className}) => {
    return (
        <div>
            <Button onClick={onClick} variant={style} className={className}>{children}</Button>
        </div>
    );
};

export default ButtonWrapp;