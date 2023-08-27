import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default App;
