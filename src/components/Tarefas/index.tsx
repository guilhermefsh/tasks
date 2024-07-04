import { IoExpand } from "react-icons/io5";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Container, Tasks, InfoTask } from './styleTarefas';
import { format } from "date-fns";
import { Task } from "../../Interfaces/Task";
interface TarefasProps {
    tasks: Task[];
    deleteTask: (index: number) => void;
    onTaskClick: (task: Task, isEditMode: boolean) => void;
}

const Tarefas = ({ tasks, deleteTask, onTaskClick }: TarefasProps) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    return (
        <Container>
            <h2>TAREFAS A FINALIZAR</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Tasks key={index}>
                        <InfoTask>{task.nomeTarefa}</InfoTask>
                        <InfoTask>{formatDate(task.dataTarefa)}</InfoTask>
                        <div>
                            <button onClick={() => onTaskClick(task, true)}><FaPencilAlt size={20} /></button>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                deleteTask(index);
                            }}><FaTrash size={20} /></button>
                            <button onClick={() => onTaskClick(task, false)}><IoExpand size={20} /></button>
                        </div>
                    </Tasks>
                ))}
            </ul>
        </Container>
    );
};

export default Tarefas;
