import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 80px;
  }

  h2 {
    margin: 24px 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    height: 80px;

    .fixation-and-delete {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
    }

    h4 {
      text-align: center;
      margin-top: 16px;

      strong {
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        margin-right: 8px;
      }

      strong:hover {
        opacity: 50%;
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--Font-color);
    margin-top: 32px;
  }
`;
