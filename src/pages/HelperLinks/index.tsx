import { Button } from "@chakra-ui/react";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";

function HelperLinksPage() {
  return (
    <PageContent>
      <PageHeader text="Helper links" />

      <div className="flex gap-2 flex-col">
        <a
          target={"_blank"}
          href="https://docs.google.com/spreadsheets/d/1FGxKHQuwz_Jx-GdYd6647FiAE9UbS6mZgufXor9_DZk/edit#gid=769947728"
        >
          <Button>PVE Damage Sheet</Button>
        </a>
        <a
          target={"_blank"}
          href="https://thearesius.github.io/Damage-Calculator-EN/"
        >
          <Button>Damage Calculator</Button>
        </a>
      </div>
    </PageContent>
  );
}

export default HelperLinksPage;
