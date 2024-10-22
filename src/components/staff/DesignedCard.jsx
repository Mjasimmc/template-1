import PropTypes from "prop-types";

import "./card.css"
const DesignedCard = ({ teacher, onEdit, onDelete }) => {
  return (
    <div className="staff-card">
      <div className="top-section">
        <div className="card-head-border text-white"></div>
        <div className="icons">
          <div className="logo">
            ds
          </div>
          <div className="social-media">
            df
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <span className="title">{teacher.name}</span>
        <div className="row row1">
          <div className="item ">
            <span className="big-text">Class InCharge</span>
            {teacher.classesInCharge.map((classInfo, index) => (
              <span className="regular-text" key={index}> {classInfo.grade} - {classInfo.section}</span>
              ))}
            
          </div>
          <div className="item">
            <span className="big-text">Subjects</span>
            {teacher.subjects.map((subject, index) => (
              <span className="regular-text " key={index}>  {subject}</span>
            ))}
          </div>
          {/* <div className="item">
            <span className="big-text">38,631</span>
            <span className="regular-text">Contributers</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DesignedCard;
