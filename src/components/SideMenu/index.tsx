import { Button, Divider } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const selectedButtonColor = "blue";

export default function SideMenu() {
  const location = useLocation();

  return (
    <aside className="bg-slate-800 text-white p-4 flex-shrink-0 w-64 h-screen ">
      <Link to="/">
        <h2 className="text-3xl font-bold text-center pt-6 pb-6">
          Grand Chase Farm Helper
        </h2>
      </Link>
      <Divider />
      <ul className="pt-6">
        <li className="pb-2">
          <Link to="/">
            <Button
              colorScheme={
                location.pathname == "/" ? selectedButtonColor : undefined
              }
              size={"sm"}
              width={"full"}
            >
              Home
            </Button>
          </Link>
        </li>
        <li className="pb-2">
          <Link to="/character-selection">
            <Button
              colorScheme={
                location.pathname == "/character-selection"
                  ? selectedButtonColor
                  : undefined
              }
              size={"sm"}
              width={"full"}
            >
              Character Selection
            </Button>
          </Link>
        </li>

        <li className="pb-2">
          <Link to="/places">
            <Button
              colorScheme={
                location.pathname == "/places" ? selectedButtonColor : undefined
              }
              size={"sm"}
              width={"full"}
            >
              Places to Farm
            </Button>
          </Link>
        </li>

        <li className="pb-2">
          <Link to="/options">
            <Button
              colorScheme={
                location.pathname == "/options"
                  ? selectedButtonColor
                  : undefined
              }
              size={"sm"}
              width={"full"}
            >
              Options
            </Button>
          </Link>
        </li>
        <li className="pb-2">
          <Link to="/helper-links">
            <Button
              colorScheme={
                location.pathname == "/helper-links"
                  ? selectedButtonColor
                  : undefined
              }
              size={"sm"}
              width={"full"}
            >
              Helper Links
            </Button>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
