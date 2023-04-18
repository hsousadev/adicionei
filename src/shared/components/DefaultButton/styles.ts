import styled from "styled-components";

export const Container = styled.button`
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 16px;
  border-radius: 32px;

  height: 48px;
  width: fit-content;

  background-color: var(--TropicalIndigo);

  :hover {
    opacity: 50%;
  }

  h4 {
    color: var(--White);
  }
`;
