import styled from "styled-components";

export const UpdateCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    border: solid 2px red;
    height: 15rem;
    width: 30rem;
  }
  input {
    font-size: 1.2rem;
    width: 20rem;
    height: 2rem;
  }
  textarea {
    height: 10rem;
    width: 20rem;
    resize: none;
  }
  button {
    height: 2rem;
    width: 20rem;
    background-color: #01bbbb;
    border: solid 0;
    border-radius: 5px;
    color: white;
  }
`;
