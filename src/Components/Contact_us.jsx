import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { COUNTRIES_COUNTRY } from "../utils/constants";
import $ from "jquery";
import "jquery-validation";
import "../utils/customvValidationMethods";

const Contact_us = () => {
  const [pcoCode, setpcoCode] = useState("+00");
  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    const dialingCode = event.target.selectedOptions[0].getAttribute("data-dialingcode");
    setpcoCode(dialingCode);
    setCountry(event.target.value);
  };

  useEffect(() => {
    let myIP = "127.0.0.1";
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then(async (data) => {
        myIP = data.ip;
        try {
          const response = await fetch(`https://ipinfo.io/${myIP}/json`);
          const data = await response.json();
          if (data && data.country) {
            setCountry(data.country);
            const found = COUNTRIES_COUNTRY.find((c) => c.iso2 === data.country);
            if (found) {
              setpcoCode(found.dialingCode);
            }
          }
        } catch (error) {}
      })
      .catch(() => {});
  }, []);

  const { t } = useTranslation();

  useEffect(() => {
    const translatedMessages = {
      co_name: { required: t("First Name is required"), IsNameNordic: t("Please enter a valid first name") },
      co_lastname: { required: t("Last Name is required"), IsNameNordic: t("Please enter a valid last name") },
      co_email: { required: t("Email is required"), IsEmail: t("Please enter a valid email") },
      co_country: { required: t("Please select a country") },
      co_phone: { required: t("Phone number is required"), IsPhoneNumber: t("Please enter a valid phone number") },
      comment: { required: t("Message is required"), minlength: t("Message must be at least 4 characters"), maxlength: t("Message must be less than 250 characters") },
      security_code: { required: t("Enter Security Code"), equalTo: t("Security Code Not Matched") },
    };

    if ($("#reg_form").data("validator")) $("#reg_form").validate().destroy();

    $("#reg_form").validate({
      ignore: [],
      errorElement: "span",
      rules: {
        co_name: { required: true, IsNameNordic: true },
        co_lastname: { required: true, IsNameNordic: true },
        co_email: { required: true, IsEmail: true },
        co_country: { required: true },
        co_phone: { required: true, IsPhoneNumber: true },
        comment: { required: true, minlength: 4, maxlength: 250 },
        security_code: { required: true, equalTo: "#generatedCodeInput" },
      },
      messages: translatedMessages,
      submitHandler: function () {
        $(".page-loader").show();
        setTimeout(() => {
          $("#thankyouModal").show();
        }, 800);
        return false;
      },
    });
  }, [t]);

  useEffect(() => {
    const generateCode = () => {
      const code = Math.floor(10000 + Math.random() * 90000);
      document.getElementById("generatedCodeDisplay").textContent = code;
      document.getElementById("generatedCodeInput").value = code;
    };
    generateCode();
    document.getElementById("refreshCode").addEventListener("click", generateCode);
  }, []);

  return (
    <>

      <div className="inner_bnr_container">
          <img src="/images/test-banner.webp" className="img-fluid w-100" alt="" />
           <div className="container banner-content">
             <div className="inner_bnr_wrap">
                <h1>{t("Contact")}</h1>
             </div>
         </div>
      </div>

      <div className="inner-wrapper contact-us-page">
        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-md-12">
            <form className="form has-validation-callback" id="reg_form" method="post">
                  <div className="form-wrap">
                    <div className="row">

                      <div className="col-lg-6">
                        <div className="form-floating mb-4">
                          <input type="text" className="form-control" name="co_name" placeholder={t("First Name")} />
                          <label>{t("First Name")}</label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-floating mb-4">
                          <input type="text" className="form-control" name="co_lastname" placeholder={t("Last Name")} />
                          <label>{t("Last Name")}</label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-floating mb-4">
                          <select className="form-control form-select" name="co_country" onChange={handleCountryChange} value={country}>
                            <option value="" disabled>{t("Select Country")}</option>
                            {COUNTRIES_COUNTRY.map((c) => (
                              <option key={c.iso2} value={c.iso2} data-dialingcode={c.dialingCode}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row d-flex">
                          <div className="col-3 pr-0">
                            <div className="form-floating mb-4">
                              <input type="text" readOnly value={pcoCode} className="form-control country-code" />
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="form-floating mb-4">
                              <input type="text" name="co_phone" className="form-control" placeholder={t("Number")} />
                              <label>{t("Number")}</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-floating mb-4">
                          <input type="email" className="form-control" name="co_email" placeholder={t("Email")} />
                          <label>{t("Email")}</label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-floating mb-4">
                          <textarea className="form-control" name="comment" placeholder={t("Message")}></textarea>
                          <label>{t("Message")}</label>
                        </div>
                      </div>

                      {/* ✅ SIMPLE CAPTCHA */}
                      <div className="col-lg-12 d-flex align-items-center mb-3">
                        <div className="form-floating" style={{ width: "60%"}}>
                          <input type="text" name="security_code" className="form-control" placeholder="Enter Security Code" style={{ backgroundColor: "#fff", color: "#000" }} />
                          <label>Enter Security Code</label>
                        </div>

                        <div className="generate-code">
                           <span id="generatedCodeDisplay"></span>
                        </div>

                        <input type="hidden" id="generatedCodeInput" />

                        <span id="refreshCode" className="refresh-code">
                          ↻
                        </span>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <button type="submit" className="common-btn">{t("Submit")}</button>
                      </div>

                      <div className="page-loader" style={{ display: "none" }}>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                      </div>

                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="thankyouModal" style={{ display: "none" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center">
            <div className="modal-header">
              <img src="/images/thank-you.webp" className="img-fluid imgcenter" alt="" />
            </div>
            <div className="modal-body">
              <p className="text-center text-dark">{t("Your message has been successfully sent!")}</p>
              <Link className="cmn-btn" to="/" style={{ width: "auto" }}>{t("Back to Home")}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
