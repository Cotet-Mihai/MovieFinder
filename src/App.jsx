import './css/App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <main className={"main-content"}>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/favorites"} element={<Favorites/>}></Route>
                </Routes>
            </main>
        </div>
    );
}


export default App
