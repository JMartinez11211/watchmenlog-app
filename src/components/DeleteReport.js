import ReportService from "../sevices/Reportservice";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DeleteReport() {
  const navigate = useNavigate();
  const location = useLocation();

  const [report, setReport] = useState({
    date: "",
    log_id: "",
    report: "",
    so_id: "",
    so_name: "",
    time: "",
  });

  useEffect(() => {
    console.log(report);
    ReportService.getReportById(location.state).then((res) => {
      console.log(res.data);
      setReport(res.data);
    });
  }, []);

  function DelReport(e) {
    e.preventDefault();
    let Report = {
      date: report.date,
      log_id: report.log_id,
      report: report.report,
      so_id: report.so_id,
      so_name: report.so_name,
      time: report.time,
    };
   
    let confirm = window.confirm("Are you sure you want to delete this record permenantly?")

    if(confirm ){

    ReportService.deleteReport(Report.log_id)
      .then((res) => {
        console.log(res.data);
        navigate("/delete-report/");
        alert("Report Deleted!")
        window.location.href = "/allreports";
      })
      .catch((err) => {
        console.log("report not deleted.");
      });
  } // delete method end.
  }
  
  

  console.log(report);
  return (
    <div>
      <table>
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
            <td>S.O Name:</td>
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
          <tr>
            <td>report:</td> 
            <td>{report.report}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={(e) => DelReport(e)}> DELETE</button>
      <button onClick={() =>window.location.href = "/allreports" }> CANCEL</button>
    </div>
  );
}
