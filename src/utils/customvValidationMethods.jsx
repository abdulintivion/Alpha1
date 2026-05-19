import $ from 'jquery';



$.validator.addMethod(
    "IsName",
    function (value, element) {
        return /^[a-zA-Z\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df\u0600-\u06FF]+([a-zA-Z\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df\u0600-\u06FF][ ]{0,1})*[a-zA-Z\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df\u0600-\u06FF]$/i.test(value);
    },
    "Please provide above details"
);

// -------  The below regex ^[\p{L}'-]+$ will satisfy the conditions for validating names in **Nordic languages** and allow the necessary special characters like Æ, Ø, Å, Ð, Á, and Í. It will also permit apostrophes and hyphens, which are common in names in many languages. -----------
$.validator.addMethod(
    "IsNameNordic",
    function (value, element) {
        return $.validator.prototype.optional(element) || /^(?![-']*$)[\p{L}][\p{L}' -]{0,60}[\p{L}]$/iu.test(value);
    },
    "Please provide above details"
);
// ------------------


// --------    Below method can be used to check if two fields have same values .. for eg. emails, pass, etc
$.validator.addMethod(
    "areSameValues",
    function (value, element, params) {
        return $(params[0]).val() === $(params[1]).val();
    },
    "Mismatch"
);
// ------------------

$.validator.addMethod(
    "IsEmail",
    function (value, element) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(value);
    },
    "Please provide valid details"
);
// ------------------

$.validator.addMethod(
    "IsCountryCode",
    function (value, element, params) {
        return /^\+\s*\d(\s*\d){0,4}$/i.test($(params[0]).val());
    },
    "Country code required"
);
// ------------------

$.validator.addMethod(
    "IsPhoneNumber",
    function (value, element) {
        return /^\d{6,15}$/.test(value);
    },
    "Please provide valid phone"
);
// ------------------

$.validator.addMethod(
    'vaildateGrecaptcha',
    function () {
      return captchaValue !== null;
    },
    'Please complete the reCAPTCHA'
);

// ------------------
