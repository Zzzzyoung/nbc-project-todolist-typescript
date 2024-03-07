import { GlobalStyle } from "./styles/GlobalStyle";
import TodoController from "./components/layout/todo/TodoController";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TodoController />
    </>
  );
};

export default App;
