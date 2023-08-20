import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import DailyFarmList from "./components/DailyFarmList";

export default function Home() {
  return (
    <PageContent>
      <PageHeader text="Daily farm list" />

      <DailyFarmList />
    </PageContent>
  );
}
