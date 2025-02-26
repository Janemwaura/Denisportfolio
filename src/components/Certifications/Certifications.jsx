import React from 'react';
import './Certifications.css';
const Certifications = () => {
  return (
    <div className="certifications">  
      <div className="sectionA"> 
      <span>Academic</span>
      <span>Background</span>
      </div>
      <hr />
      <div className="sectionB">
      <span>Bachelor of Commerce - Finance option</span>
      <span>Kabarak University</span>
      <span>October 2014 - December 2017</span>
    </div>
    <div className="sectionB">
      <span>CPA K </span>
      <span>Achievers School of Professionals</span>
      <span>June 2011 - June 2014</span>
    </div>
    <div className="sectionB">
      <span> Computer Application Packages</span>
      <span>Mount Kenya University</span>
      <span> October 2012</span>
    </div>
    <div className="sectionB">
      <span>Accounting Packages</span>
      <span>Achievers School of Professionals</span>
      <span>August 2012</span>
    </div>
    {/* <div className="blur" style={{background:"rgb(141, 219, 212)"}}></div> */}

    </div>
  )
}

export default Certifications;