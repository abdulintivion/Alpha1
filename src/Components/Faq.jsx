import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Faq = () => {
  const { t } = useTranslation();

  const faqList = [
    {
      id: "One",
      type: "faq",
      question: t("What is the margin requirement for trading?"),
      answer: t('Margin requirements vary based on leverage, account type, and the instrument being traded. You can view specific margin requirements in your trading account.')
    },
    {
      id: "Two",
      type: "faq",
      question: t("How can I practice trading without risking real money?"),
      answer: t('You can open a demo account to practice trading with virtual funds while exploring the features of our platform.')
    },
    {
      id: "Three",
      type: "faq",
      question: t("How can I stay updated on market news?"),
      answer: t("Our platform features a Market News section with real-time updates, analysis, and an economic calendar.")
    },
    {
      id: "Four",
      type: "faq",
      question: t("What documents are required for account verification?"),
      answer: t("We require a valid government-issued ID and a proof of address document, such as a utility bill or bank statement, issued within the last three months. Ensure the documents are clear and easy to read.")
    },

     {
      id: "Five",
      type: "faq",
      question: t("Are there fees for deposits and withdrawals?"),
      answer: t("Most deposits are free, but withdrawals may incur a small fee depending on the payment method. Check our Fees page for more information.")
    },
    {
      id: "Six",
      type: "faq",
      question: t("Can I open a demo account before trading live?"),
      answer: t("Absolutely! Our demo accounts allow you to practice trading with virtual funds and get familiar with the platform.")
    },
    {
      id: "Seven",
      type: "faq",
      question: t("Can I reopen a closed account?"),
      answer: t("Yes, contact our support team with your account details. Reopening a closed account is subject to verification.")
    }
    

    
  ];

  return (
    <>
      <div className="inner_bnr_container">
        <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
        <div className="container banner-content">
          <div className="inner_bnr_wrap">
            <h1>{t("Faq")}</h1>
          </div>
        </div>
      </div>

      <div className="inner-wrapper faq-page">
        <div className="container">
          <div className="accordion" id="faqAccordion">

            {(() => {
              let faqCounter = 0;

              return faqList.map((item) => {

                // Render headings
                if (item.type === "heading") {
                  return (
                    <h2 key={item.id} className="faq-section-heading mt-4 mb-3">
                      {item.title}
                    </h2>
                  );
                }

                faqCounter++;

                return (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded={faqCounter === 1 ? "true" : "false"}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.question}
                      </button>
                    </h2>

                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${faqCounter === 1 ? "show" : ""}`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                    </div>
                  </div>
                );
              });
            })()}

          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
