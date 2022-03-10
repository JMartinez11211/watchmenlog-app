import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddReport from "./components/AddReport";
import AllReports from "./components/AllReports";
import DeleteReport from "./components/DeleteReport";
import ViewReport from "./components/ViewReport";
import Header from "./components/Header"; 
import UpdateReport from "./components/UpdateReport";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllReports />} />
          <Route path="/allreports" element={<AllReports />} />
          <Route path="/add-report" element={<AddReport />} />
          <Route path={"/delete-report/"} element={<DeleteReport />} />
          <Route path="/view-report/" element={<ViewReport />} />
          <Route path="/update-report/" element={<UpdateReport />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
