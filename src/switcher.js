import React from "react";
import { Link } from "react-router-dom";

function Switcher(props) {
  const supportedLanguages = ["en", "es"];
  const { i18n, t, history, location } = props;

  let nameComponent = location.pathname.replace("/" + i18n.language + "/", "");

  const changeLanguage = nextLang => {
    const newUrl = `/${nextLang}/${nameComponent}`;
    history.push(newUrl);
    i18n.changeLanguage(nextLang);
  };

  const handleClickSelectLanguage = (event, index) => {
    changeLanguage(supportedLanguages[index]);
  };
  return (
    <React.Fragment>
      {supportedLanguages.map((option, index) => (
        <button
          key={option}
          type="button"
          onClick={event => handleClickSelectLanguage(event, index)}
        >
          {option}
        </button>
      ))}
      <ul>
        <li>
          <Link to={`/${i18n.language}/${"greeting"}`}>{t("Greeting")}</Link>
          <br />
          <Link to={`/${i18n.language}/${"farewells"}`}>{t("Farewells")}</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Switcher;
