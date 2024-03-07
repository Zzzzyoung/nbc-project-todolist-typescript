import { GlobalStyle } from "./styles/GlobalStyle";
import TodoController from "./components/todo/TodoController";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodoController />
      <Footer />
    </>
  );
};

export default App;
