import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ButtonWrapp from './Compon/ButtonWrapp'
import Task from './Compon/Task'
import NewTask from './Compon/NewTask'
import TaskList from './Compon/TaskList'
import Modal from './Modals/Modal'


function App() {
	
	const modal = useSelector(state => state.modal.modal)
    const dispatch = useDispatch()

	const disableModal = () => {
		dispatch({type:"MODAL_CHANGE_VISIBLE"})
	}
	const deleteTask = () => {
		dispatch({type:"DELETE_TASK", payload:modal.task})
		dispatch({type:"MODAL_CHANGE_VISIBLE"})
	}

	return (
		<>
			<div className='m-auto w-[500px] flex flex-col px-4 py-16'>
				<h1 className='text-center font-bold text-xl mb-4'>TO-DO APP</h1>
				<TaskList/>
				<Modal visible={modal.status}>
					<div className='bg-white px-4 py-8 rounded-md'>
						<h3 className='font-bold text-lg'>Удаление TODO</h3>
						<p className='mb-4 font-semibold text-base'>Вы уверены, что хотите удалить данную задачу?</p>
						<div className='flex gap-4 flex-row-reverse'>
							<ButtonWrapp style="destructive" onClick={()=> deleteTask()}>Удалить</ButtonWrapp>
							<ButtonWrapp style="outline" onClick={() => disableModal()}>Отмена</ButtonWrapp>
						</div>
					</div>
				</Modal>
				<NewTask className="m-auto"/>
			</div>
		</>
	)
}

export default App
