import React from 'react'
import { useTranslation } from 'react-i18next'

const Refund_return_policy = () => {
    const { t } = useTranslation();
  return (
    <>
     <div className="inner_bnr_container">
         <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
         <div className="container banner-content">
            <div className="inner_bnr_wrap">
              <h1>{t("refundPolicy.title")}</h1>
            </div>
         </div>
      </div>

      <div className="inner-wrapper legal-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="lg-heading">{t("refundPolicy.title")}</h2>

              <p>{t("refundPolicy.intro")}</p>

              <p><strong>1.</strong>&nbsp;{t("refundPolicy.point1")}</p>

              <p><strong>2.</strong>&nbsp;{t("refundPolicy.point2")}</p>

              <p><strong>3.</strong>&nbsp;{t("refundPolicy.point3")}</p>

              <p><strong>4.</strong>&nbsp;{t("refundPolicy.point4")}</p>

              <p><strong>5.</strong>&nbsp;{t("refundPolicy.point5")}</p>

              <p><strong>6.</strong>&nbsp;{t("refundPolicy.point6")}</p>

              <p><strong>7.</strong>&nbsp;{t("refundPolicy.point7")}</p>

              <p>{t("refundPolicy.contact")}</p>

              <p>{t("refundPolicy.compliance")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Refund_return_policy
