import {Header} from "./components/Header"
import {Main} from "./pages/Main"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useThemeContext } from "./context/ThemeContextProvider";
import Detail from "./pages/Detail"
function App() {
  const {dark} = useThemeContext()
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main dark={dark}/>} />
          <Route path="/country/:name" element={<Detail/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
