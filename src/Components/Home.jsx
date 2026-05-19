import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="home-banner">
         <h1>banner Section</h1>
      </div>
    </>
  );
};

export default Home;
