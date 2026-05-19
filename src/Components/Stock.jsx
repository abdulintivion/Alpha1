import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Stock = () => {
    const { t } = useTranslation();
    return (
        <>
         <div className="inner_bnr_container">
            <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
            <div className="container banner-content">
              <div className="inner_bnr_wrap">
                <h1>{t("Stock")}</h1>
              </div>
            </div>
         </div>
         
        <div className="inner-wrapper">
           <div class="container">
              <div class="row">
                 <div>Inner page Content here...</div>
             </div>
           </div>
       </div>
      </>
    )
}

export default Stock