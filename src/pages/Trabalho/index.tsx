import { useState } from "react";
import Formulario from "../../components/Formulario";
import Tarefas from "../../components/Tarefas";
import Modal from "../../components/Modal";
import { Container } from "./stylesHome";
import { Task } from "../../Interfaces/Task";

function Home() {

  // ! rever:
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);


  const handleAddTask = (newTask: Task) => {
    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (index: number) => {
    setTaskList((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const handleOpenModal = (task: Task, editMode: boolean) => {
    setSelectedTask(task);
    setIsEditMode(editMode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task === selectedTask ? updatedTask : task))
    );
    setIsModalOpen(false);
  };

  return (
    <Container>
      <section>
        <Formulario onAddTask={handleAddTask} />
      </section>

      <section>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          task={selectedTask}
          onSave={handleEditTask}
          isEditMode={isEditMode}
        />
        <Tarefas tasks={taskList} deleteTask={removeTask} onTaskClick={handleOpenModal} />
      </section>
    </Container>
  );
}

export default Home;
