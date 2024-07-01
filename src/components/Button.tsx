import { ReactNode } from "react"
import styled from "styled-components"

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, className }) => {
  return (
    <StyledButton onClick={onClick} className={className} disabled={disabled} >
      {children}
    </StyledButton>
  )
}


const StyledButton = styled.button`
  padding: 10px 40px;
  background-color: ${({theme}) => theme.primaryColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`