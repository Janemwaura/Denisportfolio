import React from "react";
import "./References.css";

const References = () => {
  return (
    <div className="section1">
      <div className="section2">
        <span>Professional </span>
        <span>References</span>
      </div>

      <hr />

      <div className="references-container">
        {/* Reference 1 */}
        <div className="section3">
          <span>John M Guthiga</span> 
          <span>Ass Manager Recon- Social Protection</span>
          <span>Equity Bank Limited</span>
          <span>0717354199</span>
          <span>John.Guthiga@equitybank.co.ke</span>
        </div>

        {/* Reference 2 */}
        <div className="section3">
          <span>Martin M Ngotho</span>
          <span>Senior Finance Accountant</span>
          <span>ALX (Ken) Ltd</span>
          <span>0780478816</span>
          <span>Martinmwangingotho@gmail.com</span>
        </div>

        {/* Reference 3 */}
        <div className="section3">
          <span>Ruth Wambui Kariuki</span>
          <span>Business Growth and Development Manager</span>
          <span>Nakuru Westside Mall</span>
          <span>0721696224</span>
          <span>Ruth.Kariuki@equitybank.co.ke</span>
        </div>
      </div>
    </div>
  );
};

export default References;
