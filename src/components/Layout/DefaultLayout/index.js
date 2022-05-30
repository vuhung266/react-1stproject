import Header from "../components/Header/";
import Sidebar from "./Sidebar";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
