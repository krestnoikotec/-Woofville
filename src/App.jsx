import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserAuth } from "@/features/auth.js";
import { AnimatePresence } from "framer-motion";
import './App.scss';
import About from "@/pages/about/About.jsx";
import Search from '@/pages/search/Search.jsx';
import Favorites from "@/pages/favorites/Favorites.jsx";
import Header from "@/components/layout/header/Header.jsx";
import Menu from "@/components/widgets/burgerMenu/Menu.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import AuthForm from "@/components/widgets/authForm/AuthForm.jsx";
import Loader from "@/components/widgets/loader/Loader.jsx";

function App() {
    const isBurgerOpen = useSelector(state => state.burger.isBurgerOpen);
    const isAuthOpen = useSelector(state => state.openAuth.isOpenAuth);
    const isLoading = useSelector(state => state.loader.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isAuthOpen]);

    useEffect(() => {
        checkUserAuth(dispatch);
    }, [dispatch]);

    return (
        <div className="app-container">
            {isLoading && <Loader />}
            <AnimatePresence mode="wait">
                {isBurgerOpen && <Menu />}
            </AnimatePresence>
            <AnimatePresence mode="wait">
                {isAuthOpen && <AuthForm />}
            </AnimatePresence>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;