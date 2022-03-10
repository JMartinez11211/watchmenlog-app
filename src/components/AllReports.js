import ReportService from "../sevices/Reportservice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

export default function AllReports() {
  const navigate = useNavigate();
  const [report, setReport] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    ReportService.getAllReports().then((res) => {
      console.log(res.data);
      setReport(res.data);
    });
  }, []);

  console.log(report);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = report.slice(indexOfFirstPost, indexOfLastPost);

  function addReport() {
    navigate("/add-report");
  }

  function updateReport(log_id) {
    navigate(`/update-report/`, { state: log_id });
  }

  function deleteReport(log_id) {
    navigate(`/delete-report/`, { state: log_id });
  }

  function viewReport(log_id) {
    navigate(`/view-report/`, { state: log_id });
  }

  return (
    <div>
      <h2 className="text-center">Reports</h2>
      <div>
        <button onClick={() => addReport()} className="addbtn">
          {" "}
          Add Report
        </button>
      </div>
      <div>
        <p></p>
      </div>
      <div className="row">
        <table className="LogTable ">
          <thead>
            <tr>
              <th>Report Log Id</th>
              <th> Date </th>
              <th>Time</th>
              <th>S.O Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((rep) => (
              <tr key={rep.log_id}>
                <td>{rep.log_id}</td>
                <td>{rep.date}</td>
                <td>{rep.time}</td>
                <td>{rep.so_name}</td>
                <td>
                  <button
                    onClick={() => updateReport(rep.log_id)}
                    className="updatebtn"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteReport(rep.log_id)}
                    className="deletebtn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => viewReport(rep.log_id)}
                    className="viewbtn"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={report.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
