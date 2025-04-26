import { useState, useEffect } from 'react'
import {Link, Route, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import About from "./pages/about/About.jsx";
import Search from './pages/search/Search';
import Favorites from "./pages/favorites/Favorites.jsx";
import LogoIcon from "./components/icons/LogoIcon.jsx";
import ThemeSwitcher from "./components/widgets/themeSwitcher/ThemeSwitcher.jsx";
import MyButton from "./components/ui/button/MyButton.jsx";
import Header from "./components/layout/header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
          <Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <MyButton to="/search" >
                SEARCH
        </MyButton>
      <LogoIcon size={"4em"} className="logo dog"/>
        <ThemeSwitcher/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
    </>
  )
}

export default App
