import { GoMoon, GoSun } from "react-icons/go";
import { useColorMode } from "@chakra-ui/react";

export default function FloatActionButton() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div
      onClick={toggleColorMode}
      className="absolute cursor-pointer hover:opacity-70 bg-slate-600 bottom-4 right-4 p-3 rounded-full text-lg"
    >
      {colorMode == "dark" ? <GoMoon /> : <GoSun className="text-white" />}
    </div>
  );
}
