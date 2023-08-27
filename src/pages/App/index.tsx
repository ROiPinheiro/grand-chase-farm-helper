import { Outlet } from "react-router-dom";
import FloatActionButton from "../../components/FloatingActionButton";
import SideMenu from "../../components/SideMenu";

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <Outlet />
      <FloatActionButton />
    </div>
  );
}

export default App;
