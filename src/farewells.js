import React from "react";
import { useTranslation } from "react-i18next";

export default function Farewells() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("Bye")}</h1>
    </div>
  );
}
