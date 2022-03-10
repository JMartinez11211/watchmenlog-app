import Reportservice from "../sevices/Reportservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddReport() {
  const navigate = useNavigate();
  const [report, setReport] = useState({
    date: "",
    report: "",
    so_id: 0,
    so_name: "",
    time: "",
  });

  function handle(e) {
    const newReport = { ...report };
    newReport[e.target.id] = e.target.value;
    setReport(newReport);
    console.log(newReport);
  }

  function saveReport(e) {
    e.preventDefault();
    let newReport = {
      date: report.date,
      report: report.report,
      so_id: report.so_id,
      so_name: report.so_name,
      time: report.time,
    };

    Reportservice.newReport(newReport)
      .then((res) => {
        console.log(res.data);
        navigate("/add-report");
        alert("Report Saved!");
        window.location.href = "/allreports";
      })
      .catch((err) => {
        console.log("record not saved.");
        alert("Record save Failed!!!");
        window.location.href = "/allreports";
      });
  } // save method end.

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1 className="text-center">New Report</h1>
            <div className="card-body">
              <form className="form">
                <div className="form-group">
                  <label className="details">S.O ID: </label>
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
                  <label className="details">S.O Name: </label>
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
                  <label className="details">Date (YYY-MM-DD): </label>
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
                  <label className="details">Time(HH:MM:SS): </label>
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
                  <label className="details">Report:</label>
                  <textarea
                    id="report"
                    placeholder="Write report here..."
                    name="report"
                    className="form-report"
                    value={report.report}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <button
                  className="savebtn "
                  onClick={(e) => saveReport(e)}
                >
                  Save
                </button>
              </form>
              <button
                className="cancelbtnadd"
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
