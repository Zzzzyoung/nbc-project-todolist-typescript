import { StHeader } from "../../styles/HeaderStyle";

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
