import styled from "styled-components";

export const StItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  width: 210px;
  border: 1px solid saddlebrown;
  border-radius: 15px;
  background-color: #fdf0d5;
  color: black;
  box-shadow: 3px 3px 10px gray;
  list-style-type: none;
`;

export const StTodoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StTodoItemButtonSet = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
`;

export const StDeleteButton = styled.button`
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(239, 35, 60, 0.5);

  &:hover {
    background-color: #ef233c;
    color: white;
  }
`;

export const StUpdateButton = styled.button`
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(56, 176, 0, 0.5);

  &:hover {
    background-color: #38b000;
    color: white;
  }
`;
