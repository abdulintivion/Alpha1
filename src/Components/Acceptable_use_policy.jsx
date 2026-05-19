import React from 'react'
import { useTranslation } from 'react-i18next'

const Acceptable_use_policy = () => {
  const { t } = useTranslation();
  return (
    <>
        <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("acceptableUsePolicy.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
  <div className="row">
    <div className="col-md-12">

      <p>{t("acceptableUsePolicy.intro")}</p>

      <p>{t("acceptableUsePolicy.summary")}</p>

      <p>{t("acceptableUsePolicy.summaryActivities")}</p>

      <h2>{t("acceptableUsePolicy.scopeTitle")}</h2>

      <ol>
        <li>{t("acceptableUsePolicy.scope1")}</li>
        <li>{t("acceptableUsePolicy.scope2")}</li>
        <li>{t("acceptableUsePolicy.scope3")}</li>
      </ol>

      <h2>{t("acceptableUsePolicy.automatedAccessTitle")}</h2>

      <ol>
        <li>{t("acceptableUsePolicy.automatedAccess1")}</li>
      </ol>

      <h2>{t("acceptableUsePolicy.prohibitedActivitiesTitle")}</h2>

      <p>{t("acceptableUsePolicy.prohibitedActivitiesIntro")}</p>

      <ol>
        <li>{t("acceptableUsePolicy.prohibited1")}</li>
        <li>{t("acceptableUsePolicy.prohibited2")}</li>
        <li>{t("acceptableUsePolicy.prohibited3")}</li>
        <li>{t("acceptableUsePolicy.prohibited4")}</li>
        <li>{t("acceptableUsePolicy.prohibited5")}</li>
        <li>{t("acceptableUsePolicy.prohibited6")}</li>

        <li>
          {t("acceptableUsePolicy.prohibited7")}
          <ol>
            <li>{t("acceptableUsePolicy.prohibited7a")}</li>
            <li>{t("acceptableUsePolicy.prohibited7b")}</li>
            <li>{t("acceptableUsePolicy.prohibited7c")}</li>
            <li>{t("acceptableUsePolicy.prohibited7d")}</li>
            <li>{t("acceptableUsePolicy.prohibited7e")}</li>
            <li>{t("acceptableUsePolicy.prohibited7f")}</li>
            <li>{t("acceptableUsePolicy.prohibited7g")}</li>
          </ol>
        </li>

        <li>{t("acceptableUsePolicy.prohibited8")}</li>

        <li>{t("acceptableUsePolicy.prohibited9")}</li>
      </ol>

    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Acceptable_use_policy
