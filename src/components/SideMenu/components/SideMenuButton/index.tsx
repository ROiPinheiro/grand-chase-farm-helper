import { Button } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { useLocation, Link } from "react-router-dom";

interface OwnProps {
  to: string;
  Icon: IconType;
  text: string;
}

function SideMenuButton({ to, Icon, text }: OwnProps) {
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
          leftIcon={<Icon />}
          justifyContent={"initial"}
        >
          <span className="sm:flex hidden">{text}</span>
        </Button>
      </Link>
    </li>
  );
}

export default SideMenuButton;
