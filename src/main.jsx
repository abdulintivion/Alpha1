import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ProtectedLayout from "./Components/ProtectedLayout.jsx";
import './style.css';
import './i18n';

// Lazy Imports
const About_us = lazy(() => import('./Components/About_us.jsx'));
const Account = lazy(() => import('./Components/Account.jsx'));
const DepositsWithdrawals = lazy(() => import('./Components/DepositsWithdrawals.jsx'));
const Commodities = lazy(() => import('./Components/Commodities.jsx'));
const Crypto = lazy(() => import('./Components/Crypto.jsx'));
const Contact_us = lazy(() => import('./Components/Contact_us.jsx'));
const Faq = lazy(() => import('./Components/Faq.jsx'));
const Forex = lazy(() => import('./Components/Forex.jsx'));
const Home = lazy(() => import('./Components/Home.jsx'));
const Indices = lazy(() => import('./Components/Indices.jsx'));
const Legal = lazy(() => import('./Components/Legal.jsx'));
const Stock = lazy(() => import('./Components/Stock.jsx'));
const NotFound = lazy(() => import("./Components/NotFound.jsx"));
const Kyc_policy = lazy(() => import("./Components/Kyc_policy.jsx"));
const Refund_return_policy = lazy(() => import("./Components/Refund_return_policy.jsx"));
const Privacy_policy = lazy(() => import("./Components/Privacy_policy.jsx"));
const Aml_policy = lazy(() => import("./Components/Aml_policy.jsx"));
const Acceptable_use_policy = lazy(() => import("./Components/Acceptable_use_policy.jsx"));
const Terms_conditions = lazy(() => import("./Components/Bonus_terms_and_conditions.jsx"));
const Risk_disclosure = lazy(() => import("./Components/Risk_disclosure_policy.jsx"));

const router = createBrowserRouter([
  {
    path: "/", element: <ProtectedLayout />, children: [
      {
        path: "/", element: <App />, children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About_us /> },
          { path: "/contact", element: <Contact_us /> },
          { path: "/forex", element: <Forex /> },
          { path: "/commodities", element: <Commodities /> },
          { path: "/crypto", element: <Crypto /> },
          { path: "/stock", element: <Stock /> },
          { path: "/indices", element: <Indices /> },
          { path: "/faq", element: <Faq /> },
          { path: "/legal", element: <Legal /> },
          { path: "/account", element: <Account /> },
          { path: "/deposits-withdrawals", element: <DepositsWithdrawals /> },
          { path: "/kyc-policy", element: <Kyc_policy /> },
          { path: "/refund-return-policy", element: <Refund_return_policy /> },
          { path: "/privacy-policy", element: <Privacy_policy /> },
          { path: "/aml-policy", element: <Aml_policy /> },
          { path: "/acceptable-use-policy", element: <Acceptable_use_policy /> },
          { path: "/terms-conditions", element: <Terms_conditions /> },
          { path: "/risk-disclosure", element: <Risk_disclosure /> },

          { path: "*", element: <NotFound /> }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
