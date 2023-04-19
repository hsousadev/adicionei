import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;

  width: 100%;
  height: 640px;
  margin-top: 16px;

  overflow-y: scroll;
  overflow-x: hidden;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 680px;

    margin-top: 48px;

    > h4 {
      color: var(--TropicalIndigo);
      cursor: pointer;
      font-weight: 700;
    }

    .PhoneInput {
      margin-bottom: 16px;
    }

    .PhoneInputInput {
      margin-bottom: 0;
    }

    .submit {
      display: flex;
      align-items: center;

      margin-top: 32px;
      gap: 16px;
    }

    label {
      color: var(--TropicalIndigo);
    }

    label,
    .type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 680px;
      margin-bottom: 8px;

      img {
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        :hover {
          opacity: 50%;
        }
      }
    }

    .type {
      margin-top: 24px;
    }

    .large {
      width: 680px;
    }

    .medium {
      width: 340px;
    }

    .short {
      width: 164px;
    }

    input,
    textarea {
      align-self: start;
      margin-bottom: 16px;

      font-size: 16px;
      border: 1px solid var(--Font-color);
      border-radius: 32px;

      background-color: transparent;
      color: var(--Font-color);

      appearance: none;
      outline: none;

      :focus {
        border: 2px solid var(--TropicalIndigo);
      }
    }

    input {
      height: 48px;
      padding: 8px 16px;
    }

    input::placeholder {
      opacity: 0.3;
    }

    textarea {
      padding: 16px;
      font-family: "Poppins", sans-serif;

      height: 148px;
      max-height: 148px;
      min-height: 148px;

      width: 680px;
      max-width: 680px;
      min-width: 680px;

      appearance: none;
    }
  }

  @media (max-width: 800px) {
    width: 100%;

    form {
      width: 100%;
      padding-right: 8px;

      h4 {
        font-size: 12px;
      }

      .type,
      label,
      input,
      textarea {
        font-size: 12px;
        width: 100%;
      }

      textarea {
        min-width: 100%;
        max-width: 100%;
      }

      .large {
        width: 100%;
      }
      .medium {
        width: 50%;
      }
      .short {
        width: 25%;
      }
    }
  }
`;
