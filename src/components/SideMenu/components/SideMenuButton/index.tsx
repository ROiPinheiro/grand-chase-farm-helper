import { Button } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

function SideMenuButton({ to, text }: { to: string; text: string }) {
  const selectedButtonColor = "blue";
  const location = useLocation();

  return (
    <li className="pb-2">
      <Link to={to}>
        <Button
          colorScheme={
            location.pathname == to ? selectedButtonColor : undefined
          }
          size={"sm"}
          width={"full"}
        >
          {text}
        </Button>
      </Link>
    </li>
  );
}

export default SideMenuButton;
