import { ReactNode } from "react"
import styled from "styled-components"


interface CardProps {
  children: ReactNode
}

export const Card = ({children} : CardProps) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  padding: 20px;
  margin: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`