import {useEffect, useState} from 'react'
import {Link, Route, Routes} from "react-router-dom";
import './App.scss'
import About from "./pages/about/About.jsx";
import Search from './pages/search/Search';
import Favorites from "./pages/favorites/Favorites.jsx";
import LogoIcon from "./components/icons/LogoIcon.jsx";
import ThemeSwitcher from "./components/widgets/themeSwitcher/ThemeSwitcher.jsx";
import MyButton from "./components/ui/button/MyButton.jsx";
import Header from "./components/layout/header/Header.jsx";
import {useSelector} from "react-redux";
import Menu from "./components/widgets/burgerMenu/Menu.jsx";

function App() {
  const isBurgerOpen = useSelector(state => state.burger.isBurgerOpen);

  return (
    <>
        {isBurgerOpen === true && (
            <Menu/>
        )}
        <Header/>
        <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
    </>
  )
}

export default App
