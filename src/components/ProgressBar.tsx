import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const percentage = (progress / 100) * 100;

  return (
    <StyledProgressBar>
      <div className="progress-bar__fill" style={{ width: `${percentage}%` }} />
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #e0e0df;
  border-radius: 10px;
  overflow: hidden;

  .progress-bar__fill {
    height: 100%;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: width 0.3s ease-in-out;
  }
`;
