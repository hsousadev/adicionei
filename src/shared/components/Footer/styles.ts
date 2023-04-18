import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid var(--BLUE-A);
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--Max-content-width);

  .logo-and-return-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 120px 0 64px 0;
    border-bottom: 1px solid var(--Font-color);

    .return-top {
      button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        gap: 8px;

        :hover {
          img {
            transition: all 0.4s ease-in-out;
            transform: rotate(360deg);
          }

          h4 {
            transition: all 0.4s ease-in-out;
          }
        }
      }
    }
  }

  .copyrights {
    padding: 24px 0 64px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: var(--Font-color);

      strong {
        color: var(--TropicalIndigo);
      }
    }

    a:hover {
      transition: all 0.4s ease-in-out;
      border-bottom: 1px solid var(--TropicalIndigo);
    }
  }

  @media (max-width: 1366px) {
    padding: 64px;
  }

  @media (max-width: 768px) {
    .logo-and-return-top {
      flex-direction: column-reverse;
      gap: 32px;
      padding: 32px;
    }

    .copyrights {
      flex-direction: column;
      gap: 16px;

      h4 {
        text-align: center;
      }
    }
  }

  @media (max-width: 375px) {
    h4 {
      flex-direction: column;
    }
  }
`;
