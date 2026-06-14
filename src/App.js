import './App.css';
import NavBar from './NavBar';
import MainPage from './MainPage/MainPage';
import Footer  from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage/CategoryPage";
import SearchPage from "./SearchPage/SearchPage"
import About from './About/About'
import Scroll from './Scrool';
import Favorites from "./Favorites/Favorites"
function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <NavBar />
<Scroll/>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/About" element={<About/>} />
            <Route path="/category/:categoryName/:idMeal" element={<CategoryPage />} />
                        <Route path="/category/:categoryName" element={<CategoryPage />} />
                        <Route path="/search/:searchName" element={< SearchPage />} />
                        <Route path='/Favorites' element={<Favorites/>} />
                   
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
