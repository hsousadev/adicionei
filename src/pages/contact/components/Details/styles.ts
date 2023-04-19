import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin-top: 48px;
  padding: 40px 32px;
  border-radius: 32px;
  border: 1px solid var(--Font-color);

  width: 720px;
  height: 600px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    margin-bottom: 24px;
  }

  .informations {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    gap: 16px;

    .detail {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      gap: 8px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 16px;

    .informations {
      .detail {
        flex-direction: column;
      }
    }
  }
`;
