import React, { useState } from 'react';
import ButtonWrapp from './ButtonWrapp';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import { useDispatch } from 'react-redux'





const NewTask = ({className}) => {

    const [press, setPress] = useState(false)
    const [value, setValue] = useState("")
    const [valid, setValid] = useState(true)
    const dispatch = useDispatch()
    const newTask = value => {
		dispatch({type:"NEW_TASK", payload:value})
    }


    const saveTask = value => {
        console.log(value)
        if (value) {
            const task = {
                id: Date.now(),
                name:value,
                done:false
            }
            newTask(task)
            setPress(false)
            setValue("")
        } else {
            setValid(false)
        }
        
    }
    return (
        <div className={className}>
            {press?
            <div className='flex flex-col items-center'>
                <div className='flex gap-2 w-[300px]'>
                    <Input value={value} onInput={e => setValue(e.target.value)}/>
                    <ButtonWrapp onClick={() => saveTask(value)}><Check/></ButtonWrapp>
                </div>
                <div className={`text-red-500 font-semibold ${valid&&'hidden'}`}>
                    Task is too short! It must be greater than 0 symbols!
                </div>
            </div>
            :
            <ButtonWrapp onClick={()=> setPress(true)}>+</ButtonWrapp>}
            
        </div>
    );
};

export default NewTask;