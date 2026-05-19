import React from 'react'
import { useTranslation } from 'react-i18next'

const Kyc_policy = () => {
  const { t } = useTranslation();

  return (
    <>
     <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("kycPolicy.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
  <div className="spacetop2x">
    <h2 className="lg-heading">{t("kycPolicy.title")}</h2>
    <p>{t("kycPolicy.intro")}</p>
    <p>{t("kycPolicy.zeroTolerance")}</p>
  </div>

  <div className="spacetop3x">
    <h3 className="common-heading">{t("kycPolicy.preventionTitle")}</h3>
    <p>{t("kycPolicy.preventionBody")}</p>
    <p>{t("kycPolicy.depositDocumentsIntro")}</p>
    <ul className="list">
      <li>{t("kycPolicy.document1")}</li>
      <li>{t("kycPolicy.document2")}</li>
      <li>{t("kycPolicy.document3")}</li>
      <li>{t("kycPolicy.document4")}</li>
    </ul>
    <p>{t("kycPolicy.support")}</p>
  </div>

  <div className="spacetop3x">
    <h3 className="common-heading">{t("kycPolicy.whenNeededTitle")}</h3>
    <p>{t("kycPolicy.whenNeeded1")}</p>
    <p>{t("kycPolicy.whenNeeded2")}</p>
    <p>{t("kycPolicy.whenNeeded3")}</p>
  </div>

  <div className="spacetop3x">
    <h3 className="common-heading">{t("kycPolicy.sendDocumentsTitle")}</h3>
    <p>{t("kycPolicy.sendDocumentsBody")}</p>

    <div className="spacetop3x">
      <h3 className="common-heading">{t("kycPolicy.safeDocumentsTitle")}</h3>
      <p>{t("kycPolicy.safeDocuments1")}</p>
      <p>{t("kycPolicy.safeDocuments2")}</p>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Kyc_policy
