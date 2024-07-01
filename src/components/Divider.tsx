import styled from "styled-components";

interface DividerProps {
  color?: string;
  thickness?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  color = "#eee",
  thickness = "0.3px",
  style = {},
  className = "",
}) => {
  return (
    <StyledDivider>
      <hr
        style={{
          borderColor: color,
          borderWidth: thickness,
          ...style,
        }}
        className={`divider ${className}`}
      />
    </StyledDivider>
  );
};

const StyledDivider = styled.div`
  .divider {
    /* width: 100%; */
    border-style: solid;
    margin: 0;
  }
`;
