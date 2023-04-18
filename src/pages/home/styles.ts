import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: 432px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: var(--Max-content-width);

  .search-and-add {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 64px;
  }

  .head-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 16px;

    padding-bottom: 16px;
    border-bottom: 1px solid var(--Font-color);
    gap: 16px;

    h4.name {
      width: 484px;
    }

    h4.email {
      width: 315px;
    }

    h4.phone {
      width: 385px;
    }
  }

  .fixed,
  .contacts {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;
    width: 100%;
    margin-bottom: 16px;
  }

  .contacts {
    margin-top: 32px;
  }
`;
