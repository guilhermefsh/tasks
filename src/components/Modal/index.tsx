import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { ButtonSave, CloseButton, ContainerButton, EditInput, EditTextarea, ModalBody, ModalContainer, ModalHeader, Overlay } from "./stylesModal";
import { Task } from "../../Interfaces/Task";
import { ModalProps } from "../../Interfaces/ModalProps";

const Modal = ({ isOpen, onClose, task, onSave, isEditMode }: ModalProps) => {
    const [editableTask, setEditableTask] = useState<Task | null>(task);

    useEffect(() => {
        setEditableTask(task);
    }, [task]);

    if (!isOpen || !task) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditableTask((prev) => prev ? { ...prev, [name]: value } : null);
    };

    const handleSave = () => {
        if (editableTask) {
            onSave(editableTask);
        }
    };

    return (
        <Overlay>
            <ModalContainer>
                <ModalHeader>
                    <h2>Detalhes da Tarefa</h2>
                    <CloseButton onClick={onClose}><IoIosCloseCircle /></CloseButton>
                </ModalHeader>
                <ModalBody>
                    {isEditMode ? (
                        <>
                            <p><strong>Nome do Autor:</strong></p>
                            <EditInput type="text" name="nomeAutor" value={editableTask?.nomeAutor || ''} onChange={handleChange} />
                            <p><strong>Número de Telefone:</strong></p>
                            <EditInput type="text" name="telefone" value={editableTask?.telefone || ''} onChange={handleChange} />
                            <p><strong>Nome da Tarefa:</strong></p>
                            <EditInput type="text" name="nomeTarefa" value={editableTask?.nomeTarefa || ''} onChange={handleChange} />
                            <p><strong>Data da Tarefa:</strong></p>
                            <EditInput type="date" name="dataTarefa" value={editableTask?.dataTarefa || ''} onChange={handleChange} />
                            <p><strong>Descrição:</strong></p>
                            <EditTextarea name="descricao" value={editableTask?.descricao || ''} onChange={handleChange} />
                            <ContainerButton>
                                <ButtonSave onClick={handleSave}><FaCheckCircle size={20} /></ButtonSave>
                            </ContainerButton>
                        </>
                    ) : (
                        <>
                            <p><strong>Nome do Autor:</strong> {editableTask?.nomeAutor}</p>
                            <p><strong>Número de Telefone:</strong> {editableTask?.telefone}</p>
                            <p><strong>Nome da Tarefa:</strong> {editableTask?.nomeTarefa}</p>
                            <p><strong>Data da Tarefa:</strong> {editableTask?.dataTarefa}</p>
                            <p><strong>Descrição:</strong> {editableTask?.descricao}</p>
                        </>
                    )}
                </ModalBody>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
