import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Legal = () => {
  const { t } = useTranslation();

  const legalData = [
    {
      title: t("Acceptable Use Policy"),
      file: "/acceptable-use-policy",
      img: "/images/pdf.webp"
    },
    {
      title: t("Terms & Conditions"),
      file: "/terms-conditions",
      img: "/images/pdf.webp"
    },
    {
      title: t("Privacy Policy"),
      file: "/privacy-policy",
      img: "/images/pdf.webp"
    },
    {
      title: t("Risk Disclosure"),
      file: "/risk-disclosure",
      img: "/images/pdf.webp"
    },
    {
      title: t("Refund Return Policy"),
      file: "/refund-return-policy",
      img: "/images/pdf.webp"
    },
    {
      title: t("KYC Policy"),
      file: "/kyc-policy",
      img: "/images/pdf.webp"
    }
  ];

  return (
    <>

      <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("Legal Documents")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
            <div className="row">
              {legalData.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="legal-box">
                      <span><img src={item.img} className="img-fluid" alt={item.title}/></span>
                      <h3>{item.title}</h3>
                      <Link to={item.file}>
                         {t("Click Here")}
                      </Link>
                  </div>
                </div>
              ))}

            </div>
        </div>
      </div>
    </>
  )
}

export default Legal
