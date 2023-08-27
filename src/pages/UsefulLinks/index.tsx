import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";

function UsefulLinksPage() {
  const { t, i18n } = useTranslation();

  const damageSheetLink =
    "https://docs.google.com/spreadsheets/d/1FGxKHQuwz_Jx-GdYd6647FiAE9UbS6mZgufXor9_DZk/edit#gid=769947728";
  const calculatorLink =
    i18n.resolvedLanguage == "pt"
      ? "https://thearesius.github.io/Damage-Calculator-BR/"
      : "https://thearesius.github.io/Damage-Calculator-EN/";

  return (
    <PageContent>
      <PageHeader text={t("useful_links_page_title")} />

      <div className="pt-2 pb-4">{t("useful_links_page_description")}</div>

      <div className="flex gap-2 flex-col w-72">
        <a target={"_blank"} href={damageSheetLink}>
          <Button className="w-full">{t("useful_links_damage_sheet")}</Button>
        </a>
        <a target={"_blank"} href={calculatorLink}>
          <Button className="w-full">
            {t("useful_links_damage_calculator")}
          </Button>
        </a>
      </div>
    </PageContent>
  );
}

export default UsefulLinksPage;
