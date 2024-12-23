import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonWrapp from './ButtonWrapp';
import { Check, Pencil, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';


const Task = ({children, task}) => {
    
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(task.name)
    const dispatch = useDispatch()
    const changeStatus = value => {
		dispatch({type:"TASK_CHANGE_STATUS", payload:value})
    }

    const openModal = () => {
        dispatch({type:"MODAL_CHANGE_VISIBLE", payload:task.id})
    }

    const updateStatus = () => {
        changeStatus(task)
    }
    const editTask = (value) => {
        if (edit) {
            const edittedTask = {
                id:task.id,
                text:value,
            }
            dispatch({type:"UPDATE_TASK", payload:edittedTask})
        }
        setEdit(!edit)
    }


    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2 w-[75%]'>
                <Checkbox checked={task.done} onCheckedChange={() => updateStatus()}/>
                {edit?
                <Input value={value} onInput={e => setValue(e.target.value)} className="w-full"/>
                :
                <p className={`font-semibold ${task.done&&'line-through'} truncate`} >{children}</p>
                }
            </div>

            <div className='flex gap-2'>
                <ButtonWrapp style="outline" onClick={() => editTask(value)}>{edit?<Check/>:<Pencil/>}</ButtonWrapp>
                <ButtonWrapp style="destructive" onClick={()=>openModal()}><Trash2/></ButtonWrapp>
            </div>

        </div>
    );
};

export default Task;