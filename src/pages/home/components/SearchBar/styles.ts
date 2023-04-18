import styled from "styled-components";

interface ContatinerProps {
  isDarkTheme: boolean;
}

export const Container = styled.div<ContatinerProps>`
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 405px;
  height: 48px;

  border-radius: 32px;
  padding: 12px 16px;

  background: transparent;
  border: 1px solid var(--Font-color);

  input {
    background: transparent;
    width: 100%;
    color: var(--Font-color);
  }

  input[type="search"] {
    appearance: none;
    font-size: 16px;
  }

  input::-webkit-input-placeholder {
    opacity: 0.25;
  }

  @media (max-width: 580px) {
    width: 100%;
  }
`;
