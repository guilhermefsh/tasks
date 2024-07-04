export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task | null;
    onSave: (updatedTask: Task) => void;
    isEditMode: boolean;
}