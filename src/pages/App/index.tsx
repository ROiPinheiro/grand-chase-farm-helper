import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import FloatActionButton from "../../components/FloatingActionButton";
import SideMenu from "../../components/SideMenu";

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <Spinner />
          </div>
        }
      >
        <div className="sm:ml-64 ml-16 w-full">
          <Outlet />
        </div>
      </Suspense>

      <FloatActionButton />
    </div>
  );
}

export default App;
