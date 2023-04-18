import styled from "styled-components";

interface ContainerProps {
  width: number;
  height: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.width}px`};

  border-radius: 100%;
  background-color: var(--TropicalIndigo);

  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--White);
    font-weight: 300;
  }
`;
