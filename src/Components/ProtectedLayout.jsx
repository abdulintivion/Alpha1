import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

const STORAGE_KEY = "site-lock-authenticated";
const FALLBACK_PASSWORD = "4-mkt@101";
const DEFAULT_TTL_MINUTES = 120;
const SITE_LOCK_TTL_MINUTES = 120;
const ENABLE_SITE_LOCK = "true";

const protectedLayoutStyles = `
  .site-lock {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: #fff;
  }

  .site-lock__card {
    width: 100%;
    max-width: 460px;
    padding: 36px 32px;
    border-radius: 24px;
    background: rgba(11, 19, 32, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  }

  .site-lock__title {
    margin-bottom: 20px;
    color: #fff;
  }

  .site-lock__form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .site-lock__label,
  .site-lock__hint {
    font-size: 14px;
    color: #dce9df;
  }

  .site-lock__input {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    padding: 14px 16px;
    color: #fff;
    outline: none;
  }

  .site-lock__input::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }

  .site-lock__input:focus {
    border-color: #53b86d;
    box-shadow: 0 0 0 4px rgba(83, 184, 109, 0.16);
  }

  .site-lock__button {
    border: 0;
    border-radius: 14px;
    padding: 14px 16px;
    color: #fff;
    font-weight: 600;
    background: linear-gradient(104deg, #599d21 -3.94%, #179b7e 131.87%);
  }

  .site-lock__error {
    margin: 0;
    color: #ffb2b2;
    font-size: 14px;
  }
`;

const getExpiryTime = () => {
  const ttlMinutes = Number(SITE_LOCK_TTL_MINUTES);
  const ttl = Number.isFinite(ttlMinutes) && ttlMinutes > 0
    ? ttlMinutes
    : DEFAULT_TTL_MINUTES;

  return Date.now() + ttl * 60 * 1000;
};

const getStoredAuthentication = () => {
  const storedValue = sessionStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return false;
  }

  try {
    const parsedValue = JSON.parse(storedValue);

    if (!parsedValue?.expiresAt || Date.now() > parsedValue.expiresAt) {
      sessionStorage.removeItem(STORAGE_KEY);
      return false;
    }

    return true;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return false;
  }
};

const ProtectedLayout = () => {
  const isSiteLockEnabled = useMemo(() => {
    const envValue = import.meta.env.VITE_ENABLE_SITE_LOCK || ENABLE_SITE_LOCK;

    if (envValue === "true") {
      return true;
    }

    if (envValue === "false") {
      return false;
    }

    return import.meta.env.DEV;
  }, []);

  const sitePassword = import.meta.env.VITE_SITE_PASSWORD || FALLBACK_PASSWORD;
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(getStoredAuthentication);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === sitePassword) {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ authenticated: true, expiresAt: getExpiryTime() })
      );
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  if (!isSiteLockEnabled || isAuthenticated) {
    return <Outlet />;
  }

  return (
    <main className="site-lock">
      <style>{protectedLayoutStyles}</style>
      <div className="site-lock__card">
        <h1 className="site-lock__title">Protected Site</h1>

        <form className="site-lock__form" onSubmit={handleSubmit}>
          <label className="site-lock__label" htmlFor="site-password">
            Password
          </label>
          <input
            id="site-password"
            type="password"
            className="site-lock__input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <label className="site-lock__hint">Hint: 4-mkt</label>
          {error ? <p className="site-lock__error">{error}</p> : null}
          <button type="submit" className="site-lock__button">
            Enter Site
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProtectedLayout;
