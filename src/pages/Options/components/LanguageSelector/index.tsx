import { IconButton } from "@chakra-ui/react";
import { BR, US } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2 className="font-bold text-lg mb-2">{t("options_select_language")}</h2>
      <div className="flex gap-2 justify-start">
        <IconButton
          icon={<BR className="m-1" />}
          colorScheme={i18n.resolvedLanguage == "pt" ? "green" : "transparent"}
          onClick={() => i18n.changeLanguage("pt")}
          aria-label={"button with en flag"}
        />

        <IconButton
          icon={<US className="m-1" />}
          colorScheme={i18n.resolvedLanguage == "en" ? "green" : "transparent"}
          onClick={() => i18n.changeLanguage("en")}
          aria-label={"button with br flag"}
        />
      </div>
    </div>
  );
}

export default LanguageSelector;
