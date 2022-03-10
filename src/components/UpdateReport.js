import Reportservice from "../sevices/Reportservice";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateReport() {
  const navigate = useNavigate();
  const location = useLocation();
  const [report, setReport] = useState({
    log_id: "",
    date: "",
    report: "",
    so_id: 0,
    so_name: "",
    time: "",
  });

  useEffect(() => {
    console.log(location.state);
    Reportservice.getReportById(location.state).then((res) => {
      console.log(res.data);
      setReport(res.data);
    });
  }, []);

  function handle(e) {
    const updateReport = { ...report };
    updateReport[e.target.id] = e.target.value;
    setReport(updateReport);
    console.log(updateReport);
  }

  function updateReport(e) {
    e.preventDefault();
    let updateReport = {
      log_id: report.log_id,
      date: report.date,
      report: report.report,
      so_id: report.so_id,
      so_name: report.so_name,
      time: report.time,
    };

    Reportservice.updateReport(updateReport, location.state)
      .then((res) => {
        console.log(res.data);
        navigate("/update-report");
        alert("Update Saved!");
        window.location.href = "/allreports";
      })
      .catch((err) => {
        console.log("record not updated.");
        alert("Update Failed!!!");
      });
  } // update method end.

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Report {report.log_id}</h3>
            <div className="card-body">
              <form className="form">
                <div className="form-group">
                  <label>S.O ID: </label>
                  <input
                    id="so_id"
                    placeholder="Id"
                    name="id"
                    type="number"
                    className="form-control"
                    value={report.so_id}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div className="form-group">
                  <label>S.O Name: </label>
                  <input
                    id="so_name"
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={report.so_name}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Date (YYY-MM-DD): </label>
                  <input
                    id="date"
                    placeholder="YYYY-MM-DD"
                    name="date"
                    className="form-control"
                    value={report.date}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Time(HH:MM:SS): </label>
                  <input
                    id="time"
                    placeholder="00:00:00"
                    name="time"
                    className="form-control"
                    value={report.time}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Report: </label>
                  <textarea
                    id="report"
                    placeholder="Write report here..."
                    name="grade"
                    className="form-report"
                    value={report.report}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => updateReport(e)}
                >
                  Update
                </button>
              </form>
              <button
                className="cancelbtnupd"
                onClick={() => (window.location.href = "/allreports")}
              >
                {" "}
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
