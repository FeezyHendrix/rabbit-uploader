import { ChangeEvent, useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import fileIcon from '../assets/file-icon.png';

export interface DragAndDropProps {
  onDrop: (files: FileList) => void;
  multiple?: boolean;
}
export const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop, multiple = true }) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleManualFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onDrop(event.target.files);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef) {
      fileInputRef.current?.click();
    }
  }
  return (
    <StyledDragAndDrop>
      <div
        className={`drag-and-drop ${dragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="drag-and-drop-message">
          {!dragging ? (
            <div>
              <img src={fileIcon} className="file-icon" />
              <p>Drag & Drop or <span className="alternate-text">Choose File</span> to Upload</p>
              <input
                type="file"
                hidden={true}
                ref={fileInputRef}
                multiple={multiple}
                onChange={handleManualFileChange}
                className="file-input"
              />
              <Button onClick={handleButtonClick}>Browse</Button>
            </div>
          ) : (
            <p>Drop here to upload files</p>
          )}
        </div>
      </div>
      );
    </StyledDragAndDrop>
  );
};

const StyledDragAndDrop = styled.div`
  padding: 10px;
  .file-icon {
    height: 50px;
    object-fit: contain;
  }
  .drag-and-drop {
    height: 150px;
    padding: 40px 10px;
    border: 2px dashed #ccc;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    background-color: #f6f8fa;
  }

  .drag-and-drop.dragging {
    background-color: ${({theme}) => theme.lightAccent};
    border-color: ${({theme}) => theme.primaryColor};
  }

  .drag-and-drop-message {
    text-align: center;
    font-size: 14px;
    color: black;
  }

  .alternate-text {
    color: ${({theme}) => theme.primaryColor};
    font-weight: 600;
  }
`;
