import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer id="site-footer" className="footer wow animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row">

            <div className="col-lg-4">
              <Link to="/">
                <img src="/images/logo-dark.webp" className="img-fluid mb-3" alt="" />
              </Link>
              <p>{t("Foreign exchange is highly speculative and carries a level of risk that may not be suitable for all investors. You may lose some or all of your invested capital. Therefore, you should not speculate with the capital you cannot afford to lose. You should be aware of all the risks associated with Foreign Exchange. Please ensure you read our Terms and Conditions and Risk Disclosure Statement before making any operations on our trading platform. We reserve the right to cancel all or a single client deal in the case of front-running or any other suspicious activity without a preliminary notification.")}</p>
              <p className="mt-3">{t("© 2025 All rights reserved.")}</p>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <div className="row">

                <div className="col-lg">
                  <h3>{t("Analytics")}</h3>
                  <ul>
                    <li><Link to="/account">{t("Account Types")}</Link></li>
                  </ul>
                </div>

                <div className="col-lg">
                  <h3>{t("About Us")}</h3>
                  <ul>
                    <li><Link to="/about">{t("About Us")}</Link></li>
                    <li><Link to="/faq">{t("Faq")}</Link></li>
                    <li><Link to="/contact">{t("Contact Us")}</Link></li>
                  </ul>
                </div>

                <div className="col-lg">
                  <h3>{t("Trading")}</h3>
                  <ul>
                    <li><Link to="/forex">{t("Forex")}</Link></li>
                    <li><Link to="/stock">{t("Stock")}</Link></li>
                    <li><Link to="/indices">{t("Indices")}</Link></li>
                    <li><Link to="/commodities">{t("Commodities")}</Link></li>
                  </ul>
                </div>

                <div className="col-lg">
                  <h3>{t("Legal")}</h3>
                  <ul>
                    <li><Link to="/terms-conditions">{t("Terms and Conditions")}</Link></li>
                    <li><Link to="/privacy-policy">{t("Privacy Policy")}</Link></li>
                    <li><Link to="/kyc-policy">{t("KYC Policy")}</Link></li>
                    <li><Link to="/refund-return-policy">{t("Refund Policy")}</Link></li>
                    <li><Link to="/acceptable-use-policy">{t("Acceptable Use Policy")}</Link></li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
