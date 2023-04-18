import styled, { css } from "styled-components";

interface ContainerProps {
  isDarkTheme: boolean;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 16px;
  padding: 8px;
  border-radius: 16px;
  width: 100%;

  :hover {
    ${(props) =>
      props.isDarkTheme
        ? css`
            background-color: var(--SpaceCadet);
          `
        : css`
            background-color: var(--GhostWhite);
          `}
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;
    width: 484px;
  }

  h4.email {
    width: 315px;
  }

  h4.phone {
    width: 385px;
  }
`;
