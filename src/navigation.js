import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Greeting from "./greeting";
import Farewells from "./farewells";

import Switcher from "./switcher";

function Navigation(props) {
  const LanguageSwitcher = withRouter(withTranslation()(Switcher));

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/:lang(en|es)/${"greeting"}`} component={Greeting} />
        <Route path={`/:lang(en|es)/${"farewells"}`} component={Farewells} />
      </Switch>
      <LanguageSwitcher />
    </BrowserRouter>
  );
}
export default Navigation;
