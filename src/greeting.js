import React from "react";
import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("GoodMoring")}</h1>
    </div>
  );
}
