import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import CharacterList from "./components/CharacterList";
import CharacterModal from "./components/CharacterModal";

export default function CharacterSelection() {
  return (
    <PageContent>
      <PageHeader text="Select characters to farm" />

      <CharacterList />
      <CharacterModal />
    </PageContent>
  );
}
