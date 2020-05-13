import React from "react";
import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("GoodMorning")}</h1>
    </div>
  );
}
