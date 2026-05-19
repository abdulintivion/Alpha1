import React from 'react'
import { useTranslation } from 'react-i18next'

const Risk_disclosure_policy = () => {
  const { t } = useTranslation();

  return (
    <>
     <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("riskDisclosurePolicy.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h2 className="lg-heading">{t("riskDisclosurePolicy.title")}</h2>
      <p>{t("riskDisclosurePolicy.intro1")}</p>

      <p>{t("riskDisclosurePolicy.intro2")}</p>

      <p>{t("riskDisclosurePolicy.intro3")}</p>

      <h5><b>{t("riskDisclosurePolicy.instrumentsIntro")}</b></h5>

      <p>{t("riskDisclosurePolicy.instrument1")}</p>
      <p>{t("riskDisclosurePolicy.instrument2")}</p>

      <p>{t("riskDisclosurePolicy.risksIntro")}</p><br/>

      <p>{t("riskDisclosurePolicy.risk1")}</p>

      <p>{t("riskDisclosurePolicy.risk2")}</p>

      <p>{t("riskDisclosurePolicy.risk3")}</p>

      <p>{t("riskDisclosurePolicy.risk4")}</p>

      <p>{t("riskDisclosurePolicy.risk5")}</p>

      <p>{t("riskDisclosurePolicy.risk6")}</p>

      <p>{t("riskDisclosurePolicy.risk7")}</p>

      <p>{t("riskDisclosurePolicy.risk8")}</p>

      <p>{t("riskDisclosurePolicy.risk9")}</p>

      <p>{t("riskDisclosurePolicy.risk10")}</p>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Risk_disclosure_policy
