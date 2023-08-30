import { Outlet } from "react-router-dom";
import FloatActionButton from "../../components/FloatingActionButton";
import SideMenu from "../../components/SideMenu";

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="sm:ml-64 ml-16 w-full">
        <Outlet />
      </div>

      <FloatActionButton />
    </div>
  );
}

export default App;
