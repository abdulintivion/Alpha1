import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import WOW from 'wow.js'
import 'animate.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'


const App = () => {
  const { t } = useTranslation();
  const {line1,line2} = t('description', { returnObjects: true });
   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname])

  useEffect(() => {
    const wow = new WOW({
      live: false,
      mobile: true,
    });

    wow.init();

    return () => {
      wow.stop();
    };
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
