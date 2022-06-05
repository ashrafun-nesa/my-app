import Sidebar from "./Sidebar.js";
import Container3 from "./Container3.js";
import Container2 from "./Container2.js";
import Container from "./Container.js";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="dashboard">
      <div className="nav-bar"></div>

      <div className="container">
        <div>
          <Container />
        </div>
        <div>
          <Container2 />
        </div>
        <div>
          <Container3/>
        </div>
      </div>

      <div className="side-bar">
        <Sidebar />
      </div>
    </div>
  );
}
