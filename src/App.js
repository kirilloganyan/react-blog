import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostForm from "./components/PostForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ='/about' element={<About/>} />
                <Route path ='/posts' element={<Posts />} />
            </Routes>
        </BrowserRouter>
        )
}

export default App
