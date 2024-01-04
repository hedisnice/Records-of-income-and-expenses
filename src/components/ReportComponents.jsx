import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponents = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h3 className="total"> ยอดคงเหลือ (บาท) </h3>
      <h2 className="total-result">
        {formatNumber((income - expense).toFixed(2))}
      </h2>
      <div className="report-container">
        <div>
          <h4>รายได้ทั้งหมด</h4>
          <p className="report plus">฿{formatNumber(income)}</p>
        </div>
        <div>
          <h4>รายจ่ายทั้งหมด </h4>
          <p className="report minus">฿{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};
export default ReportComponents;
