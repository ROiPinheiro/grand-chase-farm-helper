import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import DailyBuyList from "./components/DailyBuyList";
import DailyFarmList from "./components/DailyFarmGrid";

export default function Home() {
  return (
    <PageContent>
      <PageHeader text="Home" />

      <DailyBuyList />

      <DailyFarmList />
    </PageContent>
  );
}
