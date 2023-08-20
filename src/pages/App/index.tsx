import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import "./index.css";

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default App;
