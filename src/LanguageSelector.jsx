import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "en", flag: "us" },
    { code: "ar", lang: "ar", flag: "sa" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const selectedLang = languages.find(lng => lng.code === i18n.language) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    useEffect(()=>{
    document.documentElement.lang = i18n.language;
    document.body.dir= i18n.dir();
    },[i18n,i18n.language])

    return (
        <div className="dropdown">
            <button
                className=" dropdown-toggle d-flex align-items-center gap-2"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    src={`https://flagcdn.com/w40/${selectedLang.flag}.png`}
                    alt={selectedLang.lang}
                    className="flag-icon"
                    width="24"
                />
                {selectedLang.lang}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                {languages.map((lng) => (
                    <li key={lng.code}>
                        <a
                            className={`dropdown-item d-flex align-items-center gap-2 ${lng.code === i18n.language ? "active" : ""}`}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                changeLanguage(lng.code);
                            }}
                        >
                            <img
                                src={`https://flagcdn.com/w40/${lng.flag}.png`}
                                alt={lng.lang}
                                width="20"
                            />
                            {lng.lang}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSelector;
