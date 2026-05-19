import React from 'react'
import { useTranslation } from 'react-i18next'

const Aml_policy = () => {
  const { t } = useTranslation();
  return (
    <>
     <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("amlPolicy.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
     <div className="row">
       <div className="col-md-12">
		<h2 className="lg-heading">{t("amlPolicy.title")}</h2>
        <p>{t("amlPolicy.intro")}</p>
        <ul className="list">
        <li>{t("amlPolicy.point1")}</li>

        <li>{t("amlPolicy.point2")}</li>

        <li>{t("amlPolicy.point3")}</li>

        <li>{t("amlPolicy.point4")}</li>

        <li>{t("amlPolicy.point5")}</li>

        <li>{t("amlPolicy.point6")}</li>
        </ul>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Aml_policy
