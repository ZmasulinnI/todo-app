import React from 'react';
import { useSelector } from 'react-redux'
import Task from './Task';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
const TaskList = () => {
    const [search, setSearch] = useState("")
    
    const tasks = useSelector(state => state.todos.tasks.filter(item => item.name.includes(search)))

	const renderTasks = tasks.map(item => <Task key={item.id} task={item}>{item.name}</Task>)
    return (
        <div>
            <Input placeholder='Поиск по задачам' className="mb-4" value={search} onInput={e => setSearch(e.target.value)}/>
            <div className='mb-4'>
                {tasks.length? <div className='flex flex-col gap-4'>{renderTasks}</div>
                :
                <div className='font-medium'>Задачи отсутствуют!</div>
                }
			</div>
        </div>
    );
};

export default TaskList;