import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: var(--Max-content-width);
  width: 100%;

  padding: 32px 0 64px 0;

  .theme-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
  }

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 32px;
  }
`;
