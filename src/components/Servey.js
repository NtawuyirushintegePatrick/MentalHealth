import "../App.css"
import React from 'react'
import {Link} from "react-router-dom"

const Servey = () => {
  return (
    <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}"
    }}
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5f7ed99c2c2c7240ba580251"
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.35229"
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.35229"
  />
  <style
    type="text/css"
    id="form-designer-style"
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Injected CSS Code */\n/*PREFERENCES STYLE*/\n    .form-all {\n      font-family: Inter, sans-serif;\n    }\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-family: Inter, sans-serif;\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-family: Inter, sans-serif;\n    }\n    .form-header-group {\n      font-family: Inter, sans-serif;\n    }\n    .form-label {\n      font-family: Inter, sans-serif;\n    }\n  \n    .form-label.form-label-auto {\n      \n    display: block;\n    float: none;\n    text-align: left;\n    width: 100%;\n  \n    }\n  \n    .form-line {\n      margin-top: 12px 36px 12px 36px px;\n      margin-bottom: 12px 36px 12px 36px px;\n    }\n  \n    .form-all {\n      max-width: 752px;\n      width: 100%;\n    }\n  \n    .form-label.form-label-left,\n    .form-label.form-label-right,\n    .form-label.form-label-left.form-label-auto,\n    .form-label.form-label-right.form-label-auto {\n      width: 230px;\n    }\n  \n    .form-all {\n      font-size: 16px\n    }\n    .form-all .qq-upload-button,\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-size: 16px\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-size: 16px\n    }\n  \n    .supernova .form-all, .form-all {\n      background-color: #fff;\n    }\n  \n    .form-all {\n      color: #000000;\n    }\n    .form-header-group .form-header {\n      color: #000000;\n    }\n    .form-header-group .form-subHeader {\n      color: #000000;\n    }\n    .form-label-top,\n    .form-label-left,\n    .form-label-right,\n    .form-html,\n    .form-checkbox-item label,\n    .form-radio-item label {\n      color: #000000;\n    }\n    .form-sub-label {\n      color: #1a1a1a;\n    }\n  \n    .supernova {\n      background-color: #ffffff;\n    }\n    .supernova body {\n      background: transparent;\n    }\n  \n    .form-textbox,\n    .form-textarea,\n    .form-dropdown,\n    .form-radio-other-input,\n    .form-checkbox-other-input,\n    .form-captcha input,\n    .form-spinner input {\n      background-color: #fff;\n    }\n  \n    .supernova {\n      background-image: none;\n    }\n    #stage {\n      background-image: none;\n    }\n  \n    .form-all {\n      background-image: none;\n    }\n  \n  .ie-8 .form-all:before { display: none; }\n  .ie-8 {\n    margin-top: auto;\n    margin-top: initial;\n  }\n  \n  /*PREFERENCES STYLE*//*__INSPECT_SEPERATOR__*/.form-section.page-section {\n    border : 10px double #000;\n    box-shadow : 0px 1px 1px 9px #E8E8E8;\n}\n\n.form-line-active { \n\nbackground-color: #E8E8E8; \n\n}\n    /* Injected CSS Code */\n"
    }}
  />
  <form
    className="jotform-form"
    // action="https://submit.jotform.com/submit/222262740800547/"
    // method="post"
    name="form_222262740800547"
    id={222262740800547}
    acceptCharset="utf-8"
    autoComplete="on"
    border="none"
  >
    <input type="hidden" name="formID" defaultValue={222262740800547} />
    <input type="hidden" id="JWTContainer" defaultValue="" />
    <input type="hidden" id="cardinalOrderNumber" defaultValue="" />
    <div role="main" className="form-all">
      <style
        dangerouslySetInnerHTML={{
          __html: "\n      .form-all:before { background: none;}\n    "
        }}
      />
      <ul className="form-section page-section" style={{border:"none" ,boxShadow:"0px 4px 35px rgba(168, 172, 176, 0.19)"}}>
        <li id="cid_1" className="form-input-wide" data-type="control_head">
          <div className="form-header-group  header-large">
            <div className="header-text httac htvam">
              <h1 id="header_1" className="form-header" data-component="header" style={{color:"#5AAC4E"}}>
                Mental Health Survey
              </h1>
              <div id="subHeader_1" className="form-subHeader" >
                Please fill out this Mental health survey
              </div>
            </div>
          </div>
        </li>
        <li
          className="form-line form-line-column form-col-1"
          data-type="control_fullname"
          id="id_10"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_10"
            htmlFor="first_10"
          >
            {" "}
            Name{" "}
          </label>
          <div id="cid_10" className="form-input-wide" data-layout="full">
            <div data-wrapper-react="true">
              <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top"}}
                data-input-type="first"
              >
                <input
                  type="text"
                  id="first_10"
                  name="q10_name[first]"
                  className="form-textbox border"
                  data-defaultvalue=""
                  autoComplete="section-input_10 given-name"
                  size={10}
                  defaultValue=""
                  data-component="first"
                  aria-labelledby="label_10 sublabel_10_first"
                />
                <label
                  className="form-sub-label"
                  htmlFor="first_10"
                  id="sublabel_10_first"
                  style={{ minHeight: 13 }}
                  aria-hidden="false"
                >
                  {" "}
                  First Name{" "}
                </label>
              </span>
              <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top" }}
                data-input-type="last"
              >
                <input
                  type="text"
                  id="last_10"
                  name="q10_name[last]"
                  className="form-textbox border"
                  data-defaultvalue=""
                  autoComplete="section-input_10 family-name"
                  size={15}
                  defaultValue=""
                  data-component="last"
                  aria-labelledby="label_10 sublabel_10_last"
                />
                <label
                  className="form-sub-label"
                  htmlFor="last_10"
                  id="sublabel_10_last"
                  style={{ minHeight: 13 }}
                  aria-hidden="false"
                >
                  {" "}
                  Last Name{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li
          className="form-line form-line-column form-col-2"
          data-type="control_datetime"
          id="id_11"
        >
          <label
            className="form-label form-label-top form-label-auto "
            id="label_11"
            htmlFor="lite_mode_11"
          >
            {" "}
            Date{" "}
          </label>
          <div id="cid_11" className="form-input-wide" data-layout="half">
            <div data-wrapper-react="true">
              <div style={{ display: "none" }}>
                <span
                  className="form-sub-label-container"
                  style={{ verticalAlign: "top" }}
                >
                  <input
                    type="tel"
                    className="form-textbox validate[limitDate] "
                    id="month_11"
                    name="q11_date[month]"
                    size={2}
                    data-maxlength={2}
                    data-age=""
                    maxLength={2}
                    defaultValue=""
                    autoComplete="section-input_11 off"
                    aria-labelledby="label_11 sublabel_11_month"
                  />
                  <span className="date-separate" aria-hidden="true">
                    -
                  </span>
                  <label
                    className="form-sub-label"
                    htmlFor="month_11"
                    id="sublabel_11_month"
                    style={{ minHeight: 13 }}
                    aria-hidden="false"
                  >
                    {" "}
                    Month{" "}
                  </label>
                </span>
                <span
                  className="form-sub-label-container"
                  style={{ verticalAlign: "top" }}
                >
                  <input
                    type="tel"
                    className="form-textbox validate[limitDate]"
                    id="day_11"
                    name="q11_date[day]"
                    size={2}
                    data-maxlength={2}
                    data-age=""
                    maxLength={2}
                    defaultValue=""
                    autoComplete="section-input_11 off"
                    aria-labelledby="label_11 sublabel_11_day"
                  />
                  <span className="date-separate" aria-hidden="true">
                    -
                  </span>
                  <label
                    className="form-sub-label"
                    htmlFor="day_11"
                    id="sublabel_11_day"
                    style={{ minHeight: 13 }}
                    aria-hidden="false"
                  >
                    {" "}
                    Day{" "}
                  </label>
                </span>
                <span
                  className="form-sub-label-container"
                  style={{ verticalAlign: "top" }}
                >
                  <input
                    type="tel"
                    className="form-textbox validate[limitDate]"
                    id="year_11"
                    name="q11_date[year]"
                    size={4}
                    data-maxlength={4}
                    data-age=""
                    maxLength={4}
                    defaultValue=""
                    autoComplete="section-input_11 off"
                    aria-labelledby="label_11 sublabel_11_year"
                  />
                  <label
                    className="form-sub-label"
                    htmlFor="year_11"
                    id="sublabel_11_year"
                    style={{ minHeight: 13 }}
                    aria-hidden="false"
                  >
                    {" "}
                    Year{" "}
                  </label>
                </span>
              </div>
              <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top" }}
              >
                <input
                  type="text"
                  className="form-textbox validate[limitDate, validateLiteDate] border"
                  id="lite_mode_11"
                  size={12}
                  data-maxlength={12}
                  maxLength={12}
                  data-age=""
                  defaultValue=""
                  data-format="mmddyyyy"
                  data-seperator="-"
                  placeholder="MM-DD-YYYY"
                  autoComplete="section-input_11 off"
                  aria-labelledby="label_11 sublabel_11_litemode"
                />
                <img
                  className=" newDefaultTheme-dateIcon icon-liteMode"
                  alt="Pick a Date"
                  id="input_11_pick"
                  src="https://cdn.jotfor.ms/images/calendar.png"
                  data-component="datetime"
                  aria-hidden="true"
                  data-allow-time="No"
                  data-version="v2"
                />
                <label
                  className="form-sub-label"
                  htmlFor="lite_mode_11"
                  id="sublabel_11_litemode"
                  style={{ minHeight: 13 }}
                  aria-hidden="false"
                >
                  {" "}
                  Date{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li
          className="form-line form-line-column form-col-3"
          data-type="control_email"
          id="id_12"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_12"
            htmlFor="input_12"
          >
            {" "}
            Email{" "}
          </label>
          <div id="cid_12" className="form-input-wide" data-layout="half">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <input
                type="email"
                id="input_12"
                name="q12_email"
                className="form-textbox validate[Email] border"
                data-defaultvalue=""
                style={{ width: 310 }}
                size={310}
                defaultValue=""
                data-component="email"
                aria-labelledby="label_12 sublabel_input_12"
              />
              <label
                className="form-sub-label"
                htmlFor="input_12"
                id="sublabel_input_12"
                style={{ minHeight: 13 }}
                aria-hidden="false"
              >
                {" "}
                example@example.com{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line form-line-column form-col-4"
          data-type="control_phone"
          id="id_13"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_13"
            htmlFor="input_13_full"
          >
            {" "}
            Phone Number{" "}
          </label>
          <div id="cid_13" className="form-input-wide" data-layout="half">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <input
                type="tel"
                id="input_13_full"
                name="q13_phoneNumber[full]"
                data-type="mask-number"
                className="mask-phone-number form-textbox validate[Fill Mask] border"
                data-defaultvalue=""
                autoComplete="section-input_13 tel-national"
                style={{ width: 310 }}
                data-masked="true"
                defaultValue=""
                placeholder="(000) 000-0000"
                data-component="phone"
                aria-labelledby="label_13 sublabel_13_masked"
              />
              <label
                className="form-sub-label"
                htmlFor="input_13_full"
                id="sublabel_13_masked"
                style={{ minHeight: 13 }}
                aria-hidden="false"
              >
                {" "}
                Please enter a valid phone number.{" "}
              </label>
            </span>
          </div>
        </li>
        <li className="form-line" data-type="control_address" id="id_14">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_14"
            htmlFor="input_14_addr_line1"
          >
            {" "}
            Address{" "}
          </label>
          <div id="cid_14" className="form-input-wide" data-layout="full">
            <div summary="" className="form-address-table jsTest-addressField">
              <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                <span className="form-address-line form-address-city-line jsTest-address-lineField ">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                  >
                    <input
                      type="text"
                      id="input_14_city"
                      name="q14_address[city]"
                      className="form-textbox form-address-city border"
                      data-defaultvalue=""
                      autoComplete="section-input_14 address-level2"
                      defaultValue=""
                      data-component="city"
                      aria-labelledby="label_14 sublabel_14_city"
                      required=""
                    />
                    <label
                      className="form-sub-label"
                      htmlFor="input_14_city"
                      id="sublabel_14_city"
                      style={{ minHeight: 13 }}
                      aria-hidden="false"
                    >
                      {" "}
                      City{" "}
                    </label>
                  </span>
                </span>
                <span className="form-address-line form-address-state-line jsTest-address-lineField ">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                  >
                    <input
                      type="text"
                      id="input_14_state"
                      name="q14_address[state]"
                      className="form-textbox form-address-state border"
                      data-defaultvalue=""
                      autoComplete="section-input_14 address-level1"
                      defaultValue=""
                      data-component="state"
                      aria-labelledby="label_14 sublabel_14_state"
                      required=""
                    />
                    <label
                      className="form-sub-label"
                      htmlFor="input_14_state"
                      id="sublabel_14_state"
                      style={{ minHeight: 13 }}
                      aria-hidden="false"
                    >
                      {" "}
                      State / Province{" "}
                    </label>
                  </span>
                </span>
              </div>
              <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                <span className="form-address-line form-address-zip-line jsTest-address-lineField ">
                  <span
                    className="form-sub-label-container"
                    style={{ verticalAlign: "top" }}
                  >
                  </span>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li
          className="form-line form-line-column form-col-1"
          data-type="control_birthdate"
          id="id_4"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_4"
            htmlFor="input_4"
          >
            {" "}
            Birth Date{" "}
          </label>
          <div id="cid_4" className="form-input-wide" data-layout="full">
            <div data-wrapper-react="true">
              <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top" }}
              >
                <select
                  name="q4_birthDate4[month]"
                  id="input_4_month"
                  className="form-dropdown"
                  data-component="birthdate-month"
                  aria-labelledby="label_4 sublabel_4_month"
                >
                  <option></option>
                  <option value="January"> January </option>
                  <option value="February"> February </option>
                  <option value="March"> March </option>
                  <option value="April"> April </option>
                  <option value="May"> May </option>
                  <option value="June"> June </option>
                  <option value="July"> July </option>
                  <option value="August"> August </option>
                  <option value="September"> September </option>
                  <option value="October"> October </option>
                  <option value="November"> November </option>
                  <option value="December"> December </option>
                </select>
                <label
                  className="form-sub-label"
                  htmlFor="input_4_month"
                  id="sublabel_4_month"
                  style={{ minHeight: 13 }}
                  aria-hidden="false"
                >
                  {" "}
                  Month{" "}
                </label>
              </span>
              <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top" }}
              >
                <select
                  name="q4_birthDate4[day]"
                  id="input_4_day"
                  className="form-dropdown"
                  data-component="birthdate-day"
                  aria-labelledby="label_4 sublabel_4_day"
                >
                  <option></option>
                  <option value={1}> 1 </option>
                  <option value={2}> 2 </option>
                  <option value={3}> 3 </option>
                  <option value={4}> 4 </option>
                  <option value={5}> 5 </option>
                  <option value={6}> 6 </option>
                  <option value={7}> 7 </option>
                  <option value={8}> 8 </option>
                  <option value={9}> 9 </option>
                  <option value={10}> 10 </option>
                  <option value={11}> 11 </option>
                  <option value={12}> 12 </option>
                  <option value={13}> 13 </option>
                  <option value={14}> 14 </option>
                  <option value={15}> 15 </option>
                  <option value={16}> 16 </option>
                  <option value={17}> 17 </option>
                  <option value={18}> 18 </option>
                  <option value={19}> 19 </option>
                  <option value={20}> 20 </option>
                  <option value={21}> 21 </option>
                  <option value={22}> 22 </option>
                  <option value={23}> 23 </option>
                  <option value={24}> 24 </option>
                  <option value={25}> 25 </option>
                  <option value={26}> 26 </option>
                  <option value={27}> 27 </option>
                  <option value={28}> 28 </option>
                  <option value={29}> 29 </option>
                  <option value={30}> 30 </option>
                  <option value={31}> 31 </option>
                </select>
                <label
                  className="form-sub-label"
                  htmlFor="input_4_day"
                  id="sublabel_4_day"
                  style={{ minHeight: 13 }}
                  aria-hidden="false"
                >
                  {" "}
                  Day{" "}
                </label>
              </span>
              <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top" }}
              >
                <select
                  name="q4_birthDate4[year]"
                  id="input_4_year"
                  className="form-dropdown"
                  data-component="birthdate-year"
                  aria-labelledby="label_4 sublabel_4_year"
                >
                  <option></option>
                  <option value={2022}> 2022 </option>
                  <option value={2021}> 2021 </option>
                  <option value={2020}> 2020 </option>
                  <option value={2019}> 2019 </option>
                  <option value={2018}> 2018 </option>
                  <option value={2017}> 2017 </option>
                  <option value={2016}> 2016 </option>
                  <option value={2015}> 2015 </option>
                  <option value={2014}> 2014 </option>
                  <option value={2013}> 2013 </option>
                  <option value={2012}> 2012 </option>
                  <option value={2011}> 2011 </option>
                  <option value={2010}> 2010 </option>
                  <option value={2009}> 2009 </option>
                  <option value={2008}> 2008 </option>
                  <option value={2007}> 2007 </option>
                  <option value={2006}> 2006 </option>
                  <option value={2005}> 2005 </option>
                  <option value={2004}> 2004 </option>
                  <option value={2003}> 2003 </option>
                  <option value={2002}> 2002 </option>
                  <option value={2001}> 2001 </option>
                  <option value={2000}> 2000 </option>
                  <option value={1999}> 1999 </option>
                  <option value={1998}> 1998 </option>
                  <option value={1997}> 1997 </option>
                  <option value={1996}> 1996 </option>
                  <option value={1995}> 1995 </option>
                  <option value={1994}> 1994 </option>
                  <option value={1993}> 1993 </option>
                  <option value={1992}> 1992 </option>
                  <option value={1991}> 1991 </option>
                  <option value={1990}> 1990 </option>
                  <option value={1989}> 1989 </option>
                  <option value={1988}> 1988 </option>
                  <option value={1987}> 1987 </option>
                  <option value={1986}> 1986 </option>
                  <option value={1985}> 1985 </option>
                  <option value={1984}> 1984 </option>
                  <option value={1983}> 1983 </option>
                  <option value={1982}> 1982 </option>
                  <option value={1981}> 1981 </option>
                  <option value={1980}> 1980 </option>
                  <option value={1979}> 1979 </option>
                  <option value={1978}> 1978 </option>
                  <option value={1977}> 1977 </option>
                  <option value={1976}> 1976 </option>
                  <option value={1975}> 1975 </option>
                  <option value={1974}> 1974 </option>
                  <option value={1973}> 1973 </option>
                  <option value={1972}> 1972 </option>
                  <option value={1971}> 1971 </option>
                  <option value={1970}> 1970 </option>
                  <option value={1969}> 1969 </option>
                  <option value={1968}> 1968 </option>
                  <option value={1967}> 1967 </option>
                  <option value={1966}> 1966 </option>
                  <option value={1965}> 1965 </option>
                  <option value={1964}> 1964 </option>
                  <option value={1963}> 1963 </option>
                  <option value={1962}> 1962 </option>
                  <option value={1961}> 1961 </option>
                  <option value={1960}> 1960 </option>
                  <option value={1959}> 1959 </option>
                  <option value={1958}> 1958 </option>
                  <option value={1957}> 1957 </option>
                  <option value={1956}> 1956 </option>
                  <option value={1955}> 1955 </option>
                  <option value={1954}> 1954 </option>
                  <option value={1953}> 1953 </option>
                  <option value={1952}> 1952 </option>
                  <option value={1951}> 1951 </option>
                  <option value={1950}> 1950 </option>
                  <option value={1949}> 1949 </option>
                  <option value={1948}> 1948 </option>
                  <option value={1947}> 1947 </option>
                  <option value={1946}> 1946 </option>
                  <option value={1945}> 1945 </option>
                  <option value={1944}> 1944 </option>
                  <option value={1943}> 1943 </option>
                  <option value={1942}> 1942 </option>
                  <option value={1941}> 1941 </option>
                  <option value={1940}> 1940 </option>
                  <option value={1939}> 1939 </option>
                  <option value={1938}> 1938 </option>
                  <option value={1937}> 1937 </option>
                  <option value={1936}> 1936 </option>
                  <option value={1935}> 1935 </option>
                  <option value={1934}> 1934 </option>
                  <option value={1933}> 1933 </option>
                  <option value={1932}> 1932 </option>
                  <option value={1931}> 1931 </option>
                  <option value={1930}> 1930 </option>
                  <option value={1929}> 1929 </option>
                  <option value={1928}> 1928 </option>
                  <option value={1927}> 1927 </option>
                  <option value={1926}> 1926 </option>
                  <option value={1925}> 1925 </option>
                  <option value={1924}> 1924 </option>
                  <option value={1923}> 1923 </option>
                  <option value={1922}> 1922 </option>
                  <option value={1921}> 1921 </option>
                  <option value={1920}> 1920 </option>
                </select>
                <label
                  className="form-sub-label"
                  htmlFor="input_4_year"
                  id="sublabel_4_year"
                  style={{ minHeight: 13 }}
                  aria-hidden="false"
                >
                  {" "}
                  Year{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li
          className="form-line form-line-column form-col-2"
          data-type="control_textbox"
          id="id_15"
        >
          <label
            className="form-label form-label-top form-label-auto "
            id="label_15"
            htmlFor="input_15"
          >
            {" "}
            Age{" "}
          </label>
          <div id="cid_15" className="form-input-wide" data-layout="half">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <input
                type="text"
                id="input_15"
                name="q15_age"
                data-type="input-textbox"
                className="form-textbox border"
                data-defaultvalue=""
                style={{ width: 310 }}
                size={310}
                defaultValue=""
                data-component="textbox"
                aria-labelledby="label_15 sublabel_input_15"
              />
              <label
                className="form-sub-label"
                htmlFor="input_15"
                id="sublabel_input_15"
                style={{ minHeight: 13 }}
                aria-hidden="false"
              >
                {" "}
                Ex:23{" "}
              </label>
            </span>
          </div>
        </li>
        <li className="form-line" data-type="control_dropdown" id="id_3">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_3"
            htmlFor="input_3"
          >
            {" "}
            Gender{" "}
          </label>
          <div id="cid_3" className="form-input-wide" data-layout="half">
            <select
              className="form-dropdown"
              id="input_3"
              name="q3_gender"
              style={{ width: 310 }}
              data-component="dropdown"
            >
              <option value=""> Please Select </option>
              <option value="Male"> Male </option>
              <option value="Female"> Female </option>
            </select>
          </div>
        </li>
        <li id="cid_60" className="form-input-wide" data-type="control_head">
          <div className="form-header-group  header-default">
            <div className="header-text httac htvam">
              <h2
                id="header_60"
                className="form-header"
                data-component="header"
              >
                Help us to answer questions below
              </h2>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_63">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_63"
            htmlFor="input_63"
          >
            {" "}
            Overall how would you rate your physical health?{" "}
          </label>
          <div id="cid_63" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_63"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_63"
                  className="form-radio"
                  id="input_63_0"
                  name="q63_areYou63"
                  defaultChecked=""
                  defaultValue="Yes"
                />
                <label id="label_input_63_0" htmlFor="input_63_0">
                  {" "}
                  Excellent{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_63"
                  className="form-radio"
                  id="input_63_1"
                  name="q63_areYou63"
                  defaultValue="No"
                />
                <label id="label_input_63_1" htmlFor="input_63_1">
                  {" "}
                  Average{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_63"
                  className="form-radio"
                  id="input_63_2"
                  name="q63_areYou63"
                  defaultValue="N/A"
                />
                <label id="label_input_63_2" htmlFor="input_63_2">
                  {" "}
                  Poor{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_67">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_67"
            htmlFor="input_67"
          >
            {" "}
            Overall how would you rate your mental health?{" "}
          </label>
          <div id="cid_67" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={2}
              role="group"
              aria-labelledby="label_67"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_67"
                  className="form-radio"
                  id="input_67_0"
                  name="q67_doYou67"
                  defaultChecked=""
                  defaultValue="Yes"
                />
                <label id="label_input_67_0" htmlFor="input_67_0">
                  {" "}
                  Excellent{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_67"
                  className="form-radio"
                  id="input_67_1"
                  name="q67_doYou67"
                  defaultValue="No"
                />
                <label id="label_input_67_1" htmlFor="input_67_1">
                  {" "}
                  Not Excellent{" "}
                </label>
              </span>
              
            </div>
          </div>
        </li>
        <li
          className="form-line always-hidden form-field-hidden"
          style={{ display: "none" }}
          data-type="control_textbox"
          id="id_66"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_66"
            htmlFor="input_66"
          >
            {" "}
            Please describe{" "}
          </label>
          <div
            id="cid_66"
            className="form-input-wide always-hidden"
            data-layout="half"
          >
            <input
              type="text"
              id="input_66"
              name="q66_pleaseDescribe"
              data-type="input-textbox"
              className="form-textbox"
              data-defaultvalue=""
              style={{ width: 310 }}
              size={310}
              defaultValue=""
              data-component="textbox"
              aria-labelledby="label_66"
            />
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Do you wake up feeling rested?{" "}
          </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?{" "}
          </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad or anxious?           </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad or anxious?           </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            During the past 4 weeks, how often has your mental health affected your ability to get work done?                  </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            During the past 4 weeks, how often has your mental health affected your ability to get work done?          
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Have you felt particularly low or down for more than 2 weeks in a row?          
              </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            During the past two weeks, how often has your mental health affected your relationships?
              </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Have you noticed any change in your diet habits?              </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            When was the last time you were really happy?     
                             </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Few days ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Few weeks ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Few mounths ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Few years ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  I don't remember{" "}
                </label>
              </span>
            </div>
          </div>
          
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            When was the last time you felt good about yourself?      
          </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Few days ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Few weeks ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Few mounths ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Few years ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  I don't remember{" "}
                </label>
              </span>
            </div>
          </div>
          
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Have you ever been diagnosed with a mental disorder before?                   </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            When did you last get your mental health examination done?         
           </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  2 mounths ago{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  4 mounths ago{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Is there a history of mental disorder in your family?
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Have you seen a therapist in the recent past?
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Are you currently taking any medication?
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            What is your relationship status?
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Single{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Married{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Divorced{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  Separated{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Have you changed your job recently?    
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_28">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_28"
            htmlFor="input_28"
          >
            {" "}
            Are you going through a tough emotional situation?
            </label>
          <div id="cid_28" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={3}
              role="group"
              aria-labelledby="label_28"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_0"
                  name="q28_doYou28"
                  defaultValue="Yes"
                />
                <label id="label_input_28_0" htmlFor="input_28_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_28"
                  className="form-radio"
                  id="input_28_1"
                  name="q28_doYou28"
                  defaultValue="No"
                />
                <label id="label_input_28_1" htmlFor="input_28_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        
         
        <li className="form-line" data-type="control_textarea" id="id_36">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_36"
            htmlFor="input_36"
          >
            {" "}
            Do you want to share any other information?
            </label>
          <div id="cid_36" className="form-input-wide" data-layout="full">
            <textarea
              id="input_36"
              className="form-textarea"
              name="q36_whatKind"
              style={{ width: 648, height: 163 }}
              data-component="textarea"
              aria-labelledby="label_36"
              defaultValue={""}
            />
          </div>
        </li>
        <li id="cid_52" className="form-input-wide" data-type="control_head">
          <div className="form-header-group  header-default">
            <div className="header-text httac htvam">
              <h2
                id="header_52"
                className="form-header"
                data-component="header"
              >
                Weight
              </h2>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_textbox" id="id_53">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_53"
            htmlFor="input_53"
          >
            {" "}
            Current Weight{" "}
          </label>
          <div id="cid_53" className="form-input-wide" data-layout="half">
            <input
              type="text"
              id="input_53"
              name="q53_currentWeight"
              data-type="input-textbox"
              className="form-textbox border"
              data-defaultvalue=""
              style={{ width: 310 }}
              size={310}
              defaultValue=""
              data-component="textbox"
              aria-labelledby="label_53"
            />
          </div>
        </li>
        <li className="form-line" data-type="control_textbox" id="id_55">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_55"
            htmlFor="input_55"
          >
            {" "}
            Height{" "}
          </label>
          <div id="cid_55" className="form-input-wide" data-layout="half">
            <input
              type="text"
              id="input_55"
              name="q55_height55"
              data-type="input-textbox"
              className="form-textbox border"
              data-defaultvalue=""
              style={{ width: 310 }}
              size={310}
              defaultValue=""
              data-component="textbox"
              aria-labelledby="label_55"
            />
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_58">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_58"
            htmlFor="input_58"
          >
            {" "}
            Have you tried to lose weight before?{" "}
          </label>
          <div id="cid_58" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={2}
              role="group"
              aria-labelledby="label_58"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_58"
                  className="form-radio"
                  id="input_58_0"
                  name="q58_haveYou58"
                  defaultChecked=""
                  defaultValue="Yes"
                />
                <label id="label_input_58_0" htmlFor="input_58_0">
                  {" "}
                  Yes{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_58"
                  className="form-radio"
                  id="input_58_1"
                  name="q58_haveYou58"
                  defaultValue="No"
                />
                <label id="label_input_58_1" htmlFor="input_58_1">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li
          className="form-line always-hidden form-field-hidden"
          style={{ display: "none" }}
          data-type="control_textarea"
          id="id_57"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_57"
            htmlFor="input_57"
          >
            {" "}
            What have you found to be the most difficult part of losing weight
            in the past?{" "}
          </label>
          <div
            id="cid_57"
            className="form-input-wide always-hidden"
            data-layout="full"
          >
            <textarea
              id="input_57"
              className="form-textarea"
              name="q57_whatHave"
              style={{ width: 648, height: 163 }}
              data-component="textarea"
              aria-labelledby="label_57"
              defaultValue={""}
            />
          </div>
        </li>
        <li className="form-line" data-type="control_divider" id="id_17">
          <div id="cid_17" className="form-input-wide" data-layout="full">
            <div
              className="divider"
              aria-label="Divider"
              data-component="divider"
              style={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderColor: "#ecedf3",
                height: 1,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 5,
                marginBottom: 5
              }}
            ></div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_7">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_7"
            htmlFor="input_7"
          >
            {" "}
            Do you smoke?{" "}
          </label>
          <div id="cid_7" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={2}
              role="group"
              aria-labelledby="label_7"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_7"
                  className="form-radio"
                  id="input_7_0"
                  name="q7_doYou"
                  defaultValue="1 Pack/day"
                />
                <label id="label_input_7_0" htmlFor="input_7_0">
                  {" "}
                  1 Pack/day{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_7"
                  className="form-radio"
                  id="input_7_1"
                  name="q7_doYou"
                  defaultValue="2 Packs/day"
                />
                <label id="label_input_7_1" htmlFor="input_7_1">
                  {" "}
                  2 Packs/day{" "}
                </label>
              </span>
              <span className="form-radio-item" style={{ clear: "left" }}>
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_7"
                  className="form-radio"
                  id="input_7_2"
                  name="q7_doYou"
                  defaultValue="+3 Packs/day"
                />
                <label id="label_input_7_2" htmlFor="input_7_2">
                  {" "}
                  +3 Packs/day{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_7"
                  className="form-radio"
                  id="input_7_3"
                  name="q7_doYou"
                  defaultValue="No"
                />
                <label id="label_input_7_3" htmlFor="input_7_3">
                  {" "}
                  No{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_8">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_8"
            htmlFor="input_8"
          >
            {" "}
            Do you do any exercise?{" "}
          </label>
          <div id="cid_8" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={2}
              role="group"
              aria-labelledby="label_8"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_8"
                  className="form-radio"
                  id="input_8_0"
                  name="q8_doYou8"
                  defaultValue="1 - 3 a week"
                />
                <label id="label_input_8_0" htmlFor="input_8_0">
                  {" "}
                  1 - 3 a week{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_8"
                  className="form-radio"
                  id="input_8_1"
                  name="q8_doYou8"
                  defaultValue="3 - 5 a week"
                />
                <label id="label_input_8_1" htmlFor="input_8_1">
                  {" "}
                  3 - 5 a week{" "}
                </label>
              </span>
              <span className="form-radio-item" style={{ clear: "left" }}>
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_8"
                  className="form-radio"
                  id="input_8_2"
                  name="q8_doYou8"
                  defaultValue="Everyday"
                />
                <label id="label_input_8_2" htmlFor="input_8_2">
                  {" "}
                  Everyday{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_8"
                  className="form-radio"
                  id="input_8_3"
                  name="q8_doYou8"
                  defaultValue="Never"
                />
                <label id="label_input_8_3" htmlFor="input_8_3">
                  {" "}
                  Never{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_radio" id="id_9">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_9"
            htmlFor="input_9"
          >
            {" "}
            How many hours do you sleep?{" "}
          </label>
          <div id="cid_9" className="form-input-wide" data-layout="full">
            <div
              className="form-multiple-column"
              data-columncount={2}
              role="group"
              aria-labelledby="label_9"
              data-component="radio"
            >
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_9"
                  className="form-radio"
                  id="input_9_0"
                  name="q9_howMany"
                  defaultValue="Less than 5 hours"
                />
                <label id="label_input_9_0" htmlFor="input_9_0">
                  {" "}
                  Less than 5 hours{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_9"
                  className="form-radio"
                  id="input_9_1"
                  name="q9_howMany"
                  defaultValue="5 - 6 hours"
                />
                <label id="label_input_9_1" htmlFor="input_9_1">
                  {" "}
                  5 - 6 hours{" "}
                </label>
              </span>
              <span className="form-radio-item" style={{ clear: "left" }}>
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_9"
                  className="form-radio"
                  id="input_9_2"
                  name="q9_howMany"
                  defaultValue="7 - 8 hours"
                />
                <label id="label_input_9_2" htmlFor="input_9_2">
                  {" "}
                  7 - 8 hours{" "}
                </label>
              </span>
              <span className="form-radio-item">
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_9"
                  className="form-radio"
                  id="input_9_3"
                  name="q9_howMany"
                  defaultValue="9 - 10 hours"
                />
                <label id="label_input_9_3" htmlFor="input_9_3">
                  {" "}
                  9 - 10 hours{" "}
                </label>
              </span>
              <span className="form-radio-item" style={{ clear: "left" }}>
                <span className="dragger-item"></span>
                <input
                  type="radio"
                  aria-describedby="label_9"
                  className="form-radio"
                  id="input_9_4"
                  name="q9_howMany"
                  defaultValue="More than 10 hours"
                />
                <label id="label_input_9_4" htmlFor="input_9_4">
                  {" "}
                  More than 10 hours{" "}
                </label>
              </span>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_text" id="id_69">
          <div id="cid_69" className="form-input-wide" data-layout="full">
            <div id="text_69" className="form-html" data-component="text">
              Thank You! We will contact you shortly.
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_widget" id="id_70">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_70"
            htmlFor="input_70"
          ></label>
          <div id="cid_70" className="form-input-wide" data-layout="full">
            <div
              data-widget-name="Social Follow"
              style={{ width: "100%", textAlign: "Center", overflowX: "auto" }}
              data-component="widget-field"
            >
              <iframe
                data-client-id="529260f705a7114f70000008"
                title="Social Follow"
                frameBorder={0}
                scrolling="no"
                allowTransparency="true"
                allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen"
                data-type="iframe"
                className="custom-field-frame"
                id="customFieldFrame_70"
                src=""
                style={{
                  maxWidth: 648,
                  border: "none",
                  width: "100%",
                  height: 40
                }}
                data-width={648}
                data-height={40}
              ></iframe>
              <div className="widget-inputs-wrapper">
                <input
                  type="hidden"
                  id="input_70"
                  className="form-hidden form-widget  "
                  name="q70_typeA"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  id="widget_settings_70"
                  className="form-hidden form-widget-settings"
                  defaultValue="%5B%7B%22name%22%3A%22color%22%2C%22value%22%3A%22%234c537d%22%7D%2C%7B%22name%22%3A%22youtube%22%2C%22value%22%3A%22https%3A%2F%2Fwww.youtube.com%2Fuser%2Fthejotform%22%7D%2C%7B%22name%22%3A%22twitter%22%2C%22value%22%3A%22https%3A%2F%2Ftwitter.com%2Fjotform%22%7D%2C%7B%22name%22%3A%22linkedin%22%2C%22value%22%3A%22https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fjotform%22%7D%2C%7B%22name%22%3A%22facebook%22%2C%22value%22%3A%22https%3A%2F%2Fwww.facebook.com%2FJotform%2F%22%7D%2C%7B%22name%22%3A%22instagram%22%2C%22value%22%3A%22https%3A%2F%2Fwww.instagram.com%2F%22%7D%5D"
                  data-version={2}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_button" id="id_2">
          <div id="cid_2" className="form-input-wide" data-layout="full">
            <div
              data-align="auto"
              className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
            >
            <Link to="/">
              <button
                id="input_print_2"
                type="button"
                className="form-submit-print form-submit-button-black_blue jf-form-buttons"
                data-component="button"
              >           
                <span id="span_print_2" className="span_print" style={{color:"red"}}>
                  Cancel
                </span>

              </button>
              </Link>
              <button
                id="input_scl_2"
                type="button"
                className="form-submit-button form-sacl-button js-new-sacl-button  form-submit-button-black_blue jf-form-buttons "
                data-component="button"
              >
                Save
              </button>
              <button
              style={{background:"#5AAC4E" , border:"none"}}
                id="input_2"
                type="submit"
                className="form-submit-button form-submit-button-black_blue submit-button jf-form-buttons jsTest-submitField"
                data-component="button"
                data-content=""
              >
                Submit Survey
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </form>
</>

  )
}

export default Servey