export interface TarefasProps {
    tasks: Task[];
    deleteTask: (index: number) => void;
    onTaskClick: (task: Task, isEditMode: boolean) => void;
}