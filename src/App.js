import Todos from "./components/Todos";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {

  return (
    <ThemeContextProvider>
      <TodoContextProvider >
        <AuthContextProvider>
          <Todos />
        </AuthContextProvider>
      </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
