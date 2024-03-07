import styled from "styled-components";

const Header = () => {
  const today = new Date();
  const currentDate = `
    ${today.getFullYear()}
    .${("0" + (today.getMonth() + 1)).slice(-2)}
    .${("0" + today.getDate()).slice(-2)}`;

  return (
    <StHeader>
      <span>JiYoung's To Do List 📝</span>
      <p>{currentDate}</p>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  height: 20px;
  font-size: 17px;
  background-color: #003049;
  color: white;

  span {
    font-weight: 600;
  }

  p {
    font-size: 16px;
  }
`;
