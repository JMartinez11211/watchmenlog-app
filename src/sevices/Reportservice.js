import axios from "axios";

const REPORTBASEAPI = "http://localhost:8080/api";
class ReportService {
  getAllReports() {
    return axios.get(REPORTBASEAPI + "/allreports");
  }

  newReport(report) {
    return axios.post(REPORTBASEAPI + "/addreport", report);
  }

  getReportById(log_id) {
    return axios.get(REPORTBASEAPI + "/report/" + log_id);
  }

  updateReport(report, log_id) {
    return axios.put(REPORTBASEAPI + "/report/update/" + log_id, report);
  }

  deleteReport(log_id) {
    return axios.delete(REPORTBASEAPI + "/report/" + log_id);
  }
}

export default new ReportService();
