import styled from "styled-components";
import RabbitLogo from "../assets/rabbit-icon.png";
import { Divider } from "../components/Divider";
import { useEffect, useState } from "react";
import { DragAndDrop } from "../components/DragandDrop";
import { Button } from "../components/Button";
import { Space } from "../components/Space";
import { useFileContext } from "../state/FileContext";
import { FileType } from "../types";
import { FileTile } from "../components/FileTile";

interface RabbitUploaderProp {
  source: string;
  shouldUseDraggable?: boolean;
}

export const RabbitUploader: React.FC<RabbitUploaderProp> = ({ source, shouldUseDraggable }) => {
  const { files, addFiles } = useFileContext();

  const handleFileUpload = async () => {

  }

  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleDrop = (droppedFiles: FileList) => {
    let currentIndex = files.length;
    const fileArray: FileType[] = [];
    for (const file of droppedFiles) {
      fileArray.push({
        file,
        state: "idle",
        id: currentIndex,
        progress: 0,
      });
      currentIndex++;
    }

    addFiles(fileArray);
  };

  return (
    <StyledRabbitUploader>
      <div className="title">
        <img src={RabbitLogo} className="logo" />

        <p>Rabbit Uploader</p>
      </div>
      <Divider />
      <div className="container">
        <Space height="10" />
        <DragAndDrop onDrop={(file) => handleDrop(file)} />

        <Space height="12" />
        <div className="fileTiles">
          {files.map((file) => (
            <FileTile key={file.id} fileType={file} />
          ))}
        </div>

        <Space height="15" />
        <div className="footer">
          <Button className="cancel-btn" onClick={() => {}}>
            Cancel
          </Button>

          <Button onClick={() => {}}>Upload Files</Button>
        </div>
      </div>
    </StyledRabbitUploader>
  );
};

const StyledRabbitUploader = styled.div`
  width: 600px;
  .title {
    display: flex;
    align-items: center;
    .logo {
      height: 30px;
      object-fit: contain;
    }

    p {
      color: black;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .container {
    padding: 0px 10px;
  }

  .cancel-btn {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
    background-color: #fff;
  }

  .footer {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    margin-bottom: 10px;
  }
`;
