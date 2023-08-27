import { useTranslation } from "react-i18next";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import CharacterList from "./components/CharacterList";
import CharacterModal from "./components/CharacterModal";

export default function CharacterSelection() {
  const { t } = useTranslation();

  return (
    <PageContent>
      <PageHeader text={t("character_selection_title")} />

      <CharacterList />
      <CharacterModal />
    </PageContent>
  );
}
