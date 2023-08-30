import { useTranslation } from "react-i18next";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import DailyFarmList from "./components/DailyFarmGrid";

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageContent>
      <PageHeader text={t("home_page_title")} />

      <DailyFarmList />
    </PageContent>
  );
}
