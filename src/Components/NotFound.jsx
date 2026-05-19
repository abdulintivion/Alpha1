import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  
  
  return (
    <div className="not-found">
      <img src="/images/404.webp" alt=""/>
         <p>{t("The page you are looking for does not exist.")}</p>
         <NavLink to="/" className="common-btn">{t("Go to Home")}</NavLink>
    </div>
  );
};

export default NotFound;
