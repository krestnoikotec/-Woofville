import {Route, Routes} from "react-router-dom";
import './App.scss'
import About from "@/pages/about/About.jsx";
import Search from '@/pages/search/Search.jsx';
import Favorites from "@/pages/favorites/Favorites.jsx";
import Header from "@/components/layout/header/Header.jsx";
import {useSelector} from "react-redux";
import Menu from "@/components/widgets/burgerMenu/Menu.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import AuthForm from "@/components/widgets/authForm/AuthForm";

function App() {
  const isBurgerOpen = useSelector(state => state.burger.isBurgerOpen);
  const isAuthOpen = useSelector(state => state.openAuth.isOpenAuth);

  return (
    <>
        {isBurgerOpen === true && (
            <Menu/>
        )}
        {isAuthOpen === true && (
            <AuthForm/>
        )}
        <Header/>
        <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
