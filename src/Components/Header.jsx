import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

const Header = () => {
    const { t } = useTranslation();
    const navbarRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleMenuClick = () => {
            navbarRef.current?.classList.remove("show");
            setMenuOpen(false); // Close menu when clicking a link
        };

        document.querySelectorAll("li a").forEach((link) =>
            link.addEventListener("click", handleMenuClick)
        );

        return () =>
            document.querySelectorAll("li a").forEach((link) =>
                link.removeEventListener("click", handleMenuClick)
            );
    }, []);

    return (
        <>
            <header className="site-header">
                <div className="main-navigation">
                    <div className="container">
                        <div className="row align-items-center">
                            
                          <div className="col-lg-2 col-md-3 col-12 site-title logo">
                                <NavLink to="/">
                                    <img src="/images/logo.webp" className="img-fluid" alt="" />
                                </NavLink>
                            </div>

                            <div className="col-lg-6 col-md-3">
                                <nav className="navbar navbar-expand-lg navbar-dark">
                                    {/* Hamburger Button */}
                                    <button
                                        className={`navbar-toggler ${menuOpen ? "open" : ""}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded={menuOpen}
                                        aria-label="Toggle navigation"
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        {/* Custom icon change */}
                                        {menuOpen ? (
                                            <span className="close-icon p-2">✖</span>
                                        ) : (
                                            <span className="navbar-toggler-icon"></span>
                                        )}
                                    </button>

                                    <div
                                        className="collapse navbar-collapse justify-content-end"
                                        id="navbarSupportedContent"
                                        ref={navbarRef}
                                    >
                                        <ul className="nav navbar-nav primary-menu">
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" to="/forex">
                                                    {t("Products")}
                                                </NavLink>
                                                <ul className="sub-menu dropdown-menu">
                                                    <li>
                                                        <NavLink className="dropdown-item" to="/forex">
                                                            {t("Forex")}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink className="dropdown-item" to="/indices">
                                                            {t("Indices")}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink className="dropdown-item" to="/commodities">
                                                            {t("Commodities")}
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink className="dropdown-item" to="/stock">
                                                            {t("Stock")}
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" to="/account">
                                                    {t("Account Type")}
                                                </NavLink>
                                                <ul className="sub-menu dropdown-menu">
                                                  <li>
                                                    <NavLink className="dropdown-item" to="#!">
                                                       {t("Start Trading Now")}
                                                    </NavLink>
                                                  </li>
                                                  <li>
                                                    <NavLink className="dropdown-item" to="/deposits-withdrawals">
                                                       {t("Deposits & Withdrawals")}
                                                    </NavLink>
                                                  </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" to="/about">
                                                    {t("About Us")}
                                                </NavLink>
                                                <ul className="sub-menu dropdown-menu">
                                                    <li>
                                                       <NavLink className="dropdown-item" to="/legal">
                                                          {t("Legal")}
                                                       </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink className="dropdown-item" to="/faq">
                                                           {t("Faq")}
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/contact">
                                                    {t("Contact Us")}
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 page-header-top-right">
                                <div className="right-btn">
                                   <Link to={t("#!")} className="login-btn"> {t("Login")} </Link>
                                   <Link to="#!" className="register-btn"> {t("Sign Up")} </Link>
                                </div>
                                <LanguageSelector />     
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
