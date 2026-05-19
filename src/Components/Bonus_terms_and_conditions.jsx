import React from 'react'
import { useTranslation } from 'react-i18next'

const Bonus_terms_and_conditions = () => {
  const { t } = useTranslation();
  return (
    <>
     <div className="inner_bnr_container">
         <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("bonusTerms.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
  <h2 className="lg-heading">{t("bonusTerms.title")}</h2>

  <p>{t("bonusTerms.intro")}</p>

  <p>{t("bonusTerms.point1")}</p>

  <p>{t("bonusTerms.point2")}</p>

  <p>{t("bonusTerms.point3")}</p>

  <h3 className="common-heading">{t("bonusTerms.typesTitle")}</h3>

  <p>{t("bonusTerms.typesBody")}</p>

  <p>{t("bonusTerms.optionalNotice")}</p>

  <h3 className="common-heading">{t("bonusTerms.conditionsTitle")}</h3>

  <p>{t("bonusTerms.condition1")}</p>

  <p>{t("bonusTerms.condition2")}</p>

  <p>{t("bonusTerms.condition3")}</p>

  <p>{t("bonusTerms.condition4")}</p>

  <p>{t("bonusTerms.condition5")}</p>

  <p>{t("bonusTerms.condition6")}</p>

  <p>{t("bonusTerms.condition7")}</p>
</div>
      </div>
    </>
  )
}

export default Bonus_terms_and_conditions
