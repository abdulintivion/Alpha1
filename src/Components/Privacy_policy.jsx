import React from 'react'
import { useTranslation } from 'react-i18next'

const Privacy_policy = () => {
  const { t } = useTranslation();
  return (
    <>
     <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("privacyPolicy.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
  <h2 className="lg-heading">{t("privacyPolicy.title")}</h2>

  <h3 className="sub-heading">{t("privacyPolicy.introductionTitle")}</h3>

  <p>{t("privacyPolicy.introductionBody")}</p>

  <div className="spacetop4x clearfix"></div>

  <h3 className="sub-heading">{t("privacyPolicy.consentTitle")}</h3>

  <p>{t("privacyPolicy.consent1")}</p>

  <p>{t("privacyPolicy.consent2")}</p>

  <p>{t("privacyPolicy.consent3")}</p>

  <p>{t("privacyPolicy.consent4")}</p>

  <div className="spacetop4x clearfix"></div>

  <h3 className="sub-heading">{t("privacyPolicy.collectionTitle")}</h3>

  <p>{t("privacyPolicy.collection1")}</p>

  <p>{t("privacyPolicy.collection2")}</p>

  <div className="spacetop4x clearfix"></div>

  <h3 className="sub-heading">{t("privacyPolicy.useDisclosureTitle")}</h3>

  <p>{t("privacyPolicy.useDisclosureIntro")}</p>

  <ul className="list">
    <li>{t("privacyPolicy.useDisclosure1")}</li>
    <li>{t("privacyPolicy.useDisclosure2")}</li>
    <li>{t("privacyPolicy.useDisclosure3")}</li>
    <li>{t("privacyPolicy.useDisclosure4")}</li>
  </ul>

  <div className="spacetop4x clearfix"></div>

  <h3 className="sub-heading">{t("privacyPolicy.thirdPartiesTitle")}</h3>

  <p>{t("privacyPolicy.thirdParties1")}</p>

  <p>{t("privacyPolicy.thirdParties2")}</p>

  <p>{t("privacyPolicy.thirdParties3")}</p>

  <p>{t("privacyPolicy.thirdParties4")}</p>

  <div className="spacetop4x clearfix"></div>

  <h3 className="sub-heading">{t("privacyPolicy.securityTitle")}</h3>

  <p>{t("privacyPolicy.securityBody")}</p>
</div>
      </div>
    </>
  )
}

export default Privacy_policy
