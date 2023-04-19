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
    width: 40%;
  }

  h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  h4.email {
    width: 40%;
  }

  h4.phone {
    width: 20%;
  }

  @media (max-width: 690px) {
    .name {
      width: 100%;
    }
  }
`;
