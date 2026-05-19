import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Account = () => {
  const { t } = useTranslation();
  const brandname = t("YourBrand");

  return (
    <>
      <div className="inner_bnr_container">
         <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
        <div className="container banner-content">
          <div className="inner_bnr_wrap">
            <h1>{t("Account Types")}</h1>
          </div>
        </div>
      </div>

      <div className="inner-wrapper account-type-page">
        <div className="container">
          <p className="text-center">
            {t("{{brandName}} offers five types of accounts. Our accounts have been created to meet the needs of various traders. Immerse yourself in the world of online commerce and benefit from the most professional trading environment in the industry.")}
          </p>

          <div className="comparison-wrap clearfix mt-4">
            <div className="row">

              {/* LEFT COLUMN */}
              <div className="col-md-2 col-sm-6 hidden-sm hidden-xs acc-type acc-type-info">
                <div className="account-wrapp">
                  <ul className="accnt-list list-group-left border-list">
                    <li className="inner-list-item"></li>
                    <li className="inner-list-item">{t("Updates")}</li>
                    <li className="inner-list-item">{t("Loyalty Points")}</li>
                    <li className="inner-list-item">{t("Access")}</li>
                    <li className="inner-list-item">{t("Leverage")}</li>
                    <li className="inner-list-item">{t("Spread")}</li>
                    <li className="inner-list-item">{t("Company credit according to T&C")}</li>
                    <li className="inner-list-item mdx">{t("Access to weekly webinar")}</li>
                    <li className="inner-list-item">{t("Access to daily webinar + e-book")}</li>
                    <li className="inner-list-item">{t("Fully academy + analyst training")}</li>
                    <li className="inner-list-item min7x">{t("Full academy + on demand analyst sessions")}</li>
                    <li className="inner-list-item min7x">{t("Full academy Pro + dedicated personal analyst")}</li>
                    <li className="inner-list-item mdx">{t("Upgrade your Account at")}</li>
                  </ul>
                </div>
              </div>

              {/* GREEN ACCOUNT */}
              <div className="col-lg-2 col-md-6 acc-type">
                <div className="account-wrapp">
                  <ul className="accnt-list list-group-right border-list">
                    <li className="inner-list-item yellow-box">
                      <abbr><span className="icn acc1"></span><span>{t("GREEN ACCOUNT")}</span></abbr>
                      <span>{("€5,000")}</span>
                    </li>

                    <li className="inner-list-item amnt">{t("Daily Market Updates & Reviews")}</li>
                    <li className="inner-list-item">{t("FLOATING")}</li>
                    <li className="inner-list-item">{t("UP TO 1:50")}</li>
                    <li className="inner-list-item"><abbr className="yes">{t("1:2 UST pairs / 1:4 others")}</abbr></li>
                    <li className="inner-list-item"><p>{t("2.5 - 3")}</p></li>
                    <li className="inner-list-item"><abbr className="green-color">{t("Up to 25%")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item">-</li>
                    <li className="inner-list-item">-</li>
                    <li className="inner-list-item min7x">-</li>
                    <li className="inner-list-item min7x"><abbr className="no">{t("Full academy Pro + dedicated personal analyst")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="no">{t("Upgrade To Premium at 25M Turnover")}</abbr></li>
                  </ul>
                </div>
              </div>

              {/* PREMIUM ACCOUNT */}
              <div className="col-lg-2 col-md-6 acc-type acc-type-boxes">
                <div className="account-wrapp">
                  <ul className="accnt-list list-group-right border-list">
                    <li className="inner-list-item green-box">
                      <abbr><span className="icn acc2"></span><span>{t("PREMIUM ACCOUNT")}</span></abbr>
                      <span>{("€10,000")}</span>
                    </li>
                    <li className="inner-list-item amnt">{t("Weekly trade recommendations")}</li>
                    <li className="inner-list-item"><i className="fa fa-check-circle" /></li>
                    <li className="inner-list-item">{t("Trade Expert")}</li>
                    <li className="inner-list-item"><abbr className="yes">{t("1:2 UST pairs / 1:4 others")}</abbr></li>
                    <li className="inner-list-item"><p>{t("2 - 2.5")}</p></li>
                    <li className="inner-list-item"><abbr className="green-color">{t("Up to 25%")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item">-</li>
                    <li className="inner-list-item min7x">-</li>
                    <li className="inner-list-item min7x"><abbr className="yes">{t("Full academy Pro + dedicated personal analyst")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes">{t("Upgrade To Platinum at 75M Turnover")}</abbr></li>
                  </ul>
                </div>
              </div>

              {/* PLATINUM ACCOUNT */}
              <div className="col-lg-2 col-md-6 acc-type acc-type-boxes">
                <div className="account-wrapp">
                  <ul className="accnt-list list-group-right border-list">
                    <li className="inner-list-item yellow-box">
                      <abbr><span className="icn acc3"></span><span>{t("PLATINUM ACCOUNT")}</span></abbr>
                      <span>{t("€50,000")}</span>
                    </li>

                    <li className="inner-list-item amnt">{t("Daily trade recommendations")}</li>
                    <li className="inner-list-item"><i className="fa fa-check-circle" /><p>{t("x1.5")}</p></li>
                    <li className="inner-list-item">{t("Premium Trade Expert")}</li>
                    <li className="inner-list-item"><abbr className="yes">{t("1:2 UST pairs / 1:4 others")}</abbr></li>
                    <li className="inner-list-item"><p>{t("1.5 - 2")}</p></li>
                    <li className="inner-list-item"><abbr className="green-color">{t("Up to 25%")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item min7x">-</li>
                    <li className="inner-list-item min7x"><abbr className="yes">{t("Full academy Pro + dedicated personal analyst")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes">{t("Upgrade To Business at 100M Turnover")}</abbr></li>
                  </ul>
                </div>
              </div>

              {/* BUSINESS ACCOUNT */}
              <div className="col-lg-2 col-md-6 acc-type acc-type-boxes">
                <div className="account-wrapp">
                  <ul className="accnt-list list-group-right border-list">
                    <li className="inner-list-item green-box">
                      <abbr><span className="icn acc4"></span><span>{t("BUSINESS ACCOUNT")}</span></abbr>
                      <span>{t("€100,000")}</span>
                    </li>

                    <li className="inner-list-item amnt">{t("Hourly trade recommendations")}</li>
                    <li className="inner-list-item"><i className="fa fa-check-circle" /><p>{t("x1.3")}</p></li>
                    <li className="inner-list-item">{t("Specialized Trade Expert’s Team")}</li>
                    <li className="inner-list-item"><abbr className="yes">{t("1:2 UST pairs / 1:4 others")}</abbr></li>
                    <li className="inner-list-item"><p>{t("1 - 1.5")}</p></li>
                    <li className="inner-list-item"><abbr className="green-color">{t("Up to 25%")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item min7x"><i className="fa fa-check-circle" /></li>
                    <li className="inner-list-item min7x"><abbr className="yes">{t("Full academy Pro + dedicated personal analyst")}</abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes">{t("Upgrade To Executive at 150M Turnover")}</abbr></li>
                  </ul>
                </div>
              </div>

              {/* EXECUTIVE ACCOUNT */}
              <div className="col-lg-2 col-md-6 acc-type acc-type-boxes">
                <div className="account-wrapp">
                  <ul className="accnt-list list-group-right border-list">
                    <li className="inner-list-item green-box">
                      <abbr><span className="icn acc5"></span><span>{t("EXECUTIVE ACCOUNT")}</span></abbr>
                      <span>{t("€250,000")}</span>
                    </li>

                    <li className="inner-list-item amnt">{t("Live recommendation feed")}</li>
                    <li className="inner-list-item">{t("Custom Loyalty Points Program")}</li>
                    <li className="inner-list-item">{t("Executive Expert‘s Team")}</li>
                    <li className="inner-list-item"><abbr className="yes">{t("Tailored Leverage")}</abbr></li>
                    <li className="inner-list-item"><p>{t("0.5 - 1")}</p></li>
                    <li className="inner-list-item">{t("Up to 25%")}</li>
                    <li className="inner-list-item mdx"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item min7x"><i className="fa fa-check-circle" /></li>
                    <li className="inner-list-item min7x"><abbr className="yes"><i className="fa fa-check-circle" /></abbr></li>
                    <li className="inner-list-item mdx"><abbr className="yes">{t("Tailored benefits for turnover milestones")}</abbr></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Account;
