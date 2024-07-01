import styled from "styled-components"

interface SpaceInterface {
  height: string
}

export const Space: React.FC<SpaceInterface> = ({ height }) => {
  return (
    <StyledSpace height={height} />
  )
}

const StyledSpace = styled.div<SpaceInterface>`
  height: ${props => props.height}px;
`