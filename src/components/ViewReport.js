import ReportService from "../sevices/Reportservice";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ViewReport() {
  const location = useLocation();
  const [report, setReport] = useState({
    date: "0000-00-00",
    log_id: 0,
    report: "This is a test",
    so_id: 0,
    so_name: "test",
    time: "00:00:00",
  });

  useEffect(() => {
    console.log(report);
    ReportService.getReportById(location.state).then((res) => {
      console.log(res.data);
      setReport(res.data);
    });
  }, []);

  console.log(report);
  return (
    <div>
      <table className="viewtable">
        <thead>
          <tr>
          <th>
            <h3>Report Log: {report.log_id}</h3>
          </th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S.O:</td>
            <td>{report.so_name}</td>
          </tr>
          <tr>
            <td>S.O id:</td>
            <td>{report.so_id}</td>
          </tr>
          <tr>
            <td>Date:</td> 
            <td>{report.date} </td>
          </tr>
          <tr>
            <td>Time:</td> 
            <td>{report.time}</td>
          </tr>
          <tr className="reportrow">
            <td>report:</td> 
            <td>{report.report}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => (window.location.href = "/allreports")}>
        {" "}
        HOME
      </button>
    </div>
  );
}
