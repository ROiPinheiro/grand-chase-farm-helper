import { Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  GoGear,
  GoHome,
  GoLinkExternal,
  GoProjectRoadmap,
} from "react-icons/go";
import { Link } from "react-router-dom";
import SideMenuButton from "./components/SideMenuButton";

export default function SideMenu() {
  const { t } = useTranslation();

  return (
    <aside className="bg-slate-800 fixed text-white p-4 flex-shrink-0 sm:w-64 w-16 h-screen">
      <div className="sm:visible sm:h-auto h-0 invisible">
        <Link to="/">
          <h2 className="text-3xl font-bold text-center pt-6 pb-6">
            {t("side_menu_title")}
          </h2>
        </Link>
        <Divider />
      </div>
      <ul className="pt-6">
        <SideMenuButton to="/" Icon={GoHome} text={t("side_menu_home")} />
        <SideMenuButton
          to="/characters"
          Icon={GoProjectRoadmap}
          text={t("side_menu_character_selection")}
        />
        <SideMenuButton
          to="/dailies"
          Icon={GoProjectRoadmap}
          text={t("side_menu_daily")}
        />
        <SideMenuButton
          to="/options"
          Icon={GoGear}
          text={t("side_menu_options")}
        />
        <SideMenuButton
          to="/helper-links"
          Icon={GoLinkExternal}
          text={t("side_menu_useful_links")}
        />
      </ul>
    </aside>
  );
}
