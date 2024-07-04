import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    color:var(--blackColor);
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
`;

export const ModalBody = styled.div`
    p {
        margin: 10px 0;
        color:var(--blackColor);
        word-wrap: break-word;
    }
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;
`;

export const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export const ContainerButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const ButtonSave = styled.button`
    border:none;
    cursor:pointer;
    color:var(--greenColor);
`
