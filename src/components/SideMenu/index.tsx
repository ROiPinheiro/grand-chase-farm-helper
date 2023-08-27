import { Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SideMenuButton from "./components/SideMenuButton";

export default function SideMenu() {
  const { t } = useTranslation();

  return (
    <aside className="bg-slate-800 text-white p-4 flex-shrink-0 w-64 h-auto">
      <Link to="/">
        <h2 className="text-3xl font-bold text-center pt-6 pb-6">
          {t("side_menu_title")}
        </h2>
      </Link>
      <Divider />
      <ul className="pt-6">
        <SideMenuButton to="/" text={t("side_menu_home")} />
        <SideMenuButton
          to="/character-selection"
          text={t("side_menu_character_selection")}
        />
        <SideMenuButton to="/options" text={t("side_menu_options")} />
        <SideMenuButton to="/helper-links" text={t("side_menu_useful_links")} />
        {/* <SideMenuButton to="/places" text="Places to Farm" /> */}
      </ul>
    </aside>
  );
}
