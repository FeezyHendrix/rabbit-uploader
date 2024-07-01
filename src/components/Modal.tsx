import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <StyledModal>
      <div className="modal-overlay">
        <div className="modal-content">{children}</div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background: white;
    /* padding: 20px; */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
`;
