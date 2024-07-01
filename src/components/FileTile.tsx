import styled from "styled-components";
import { FileType } from "../types";
import SingleFileIcon from "../assets/single-file.png";
import { ProgressBar } from "./ProgressBar";
import { formatFileSize } from "../util"

interface FileTileProps {
  fileType: FileType;
}

export const FileTile: React.FC<FileTileProps> = ({ fileType }) => {
  return (
    <StyledFileTile>
      <div className="fileInfoContainer">
        <img src={SingleFileIcon} className="icon" />
        <div className="infoWrapper">
          <p className="file-name"> {fileType.file.name}</p>

          <p className="file-size">{formatFileSize(fileType.file.size)}</p>
          <p className="">{fileType.timeLeft}</p>
        </div>
      </div>
      <ProgressBar progress={fileType.progress || 0} />
    </StyledFileTile>
  );
};

const StyledFileTile = styled.div`
  padding: 10px;
  margin: 10px 0px;
  .icon {
    height: 20px;
    object-fit: contain;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 7px;
  }

  p {
    margin: 0;
  }

  .fileInfoContainer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }


  .file-info {
    display: flex;
    align-items: start;
    justify-content: start;
  }

  .file-name {
    color: black;
    font-size: 12px;
    font-weight: 600;
  }

  .file-size {
    color: #ABAEB7;
    text-align: left;
    font-size: 10px;
  }
`;
