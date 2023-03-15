import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.SchoolName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
               {resumeData.skillsDescription}
               </p>
   				<div className="bars">
   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
   					</ul>
   				</div>
   			</div>
         </div>
         <div className="row capstone">
            <div className="three columns header-col">
            <h1><span>Capstone Details</span></h1>
          </div>
          <div className="nine columns main-col">
          {
                resumeData.capstone && resumeData.capstone.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p className="info">
                          {item.description}</p>
                       </div>
                    </div>
                  )
                })
              }
              <a href={'https://www.figma.com/proto/piMkKDt556938DQ8LtsDKI/Untitled?node-id=1-10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A1410&show-proto-sidebar=1'}>Click Link</a>
          </div>
          </div>
          <div className="row coverletter">
            <div className="three columns header-col">
            <h1><span>Coverletter</span></h1>
          </div>
          <div className="nine columns main-col">
          {
                resumeData.coverletter && resumeData.coverletter.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <a href={require("../../src/files/Coverletter.docx")} download="myFile">Download file</a>
                       </div>
                    </div>
                  )
                })
              }
          </div>
       </div>
      </section>
    );
  }
}