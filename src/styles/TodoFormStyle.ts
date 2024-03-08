import styled from "styled-components";

export const StSubmitContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 30px 25px;
  height: 50px;
  max-width: 1230px;
  min-width: 800px;
  border: 1px solid;
  border-radius: 15px;
  border-color: transparent;
  font-size: 18px;
  font-weight: 700;
  background-color: #669bbc;
`;

export const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  label {
    font-size: 16px;
  }

  input {
    height: 20px;
    border-radius: 5px;
    border-color: transparent;
  }
`;

export const StTodoAddButton = styled.button`
  margin-left: 10px;
  padding: 5px 8px;
  border-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  background-color: #0230499f;
  color: white;

  &:hover {
    background-color: #003049;
    color: white;
  }
`;
