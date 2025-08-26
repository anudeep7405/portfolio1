import React from "react";
import "../css/education.css"; // Correct relative path

const Education = () => {
  return (
    <div className="box-container">
      <div className="box">
        <div>
          <p>MCA</p>
          <p>Nagarjuna College of Management Studies</p>
          <p>11/2022 - 3/2025</p>
          <p>7.43</p>
        </div>

        <div>
          <p>BSc</p>
          <p>Sree Kongadiyappa College</p>
          <p>9/2021</p>
          <p>7.21</p>
        </div>

        <div>
          <p>12</p>
          <p>Sri Devaraj Urs Trust PU College</p>
          <p>2018</p>
          <p>62%</p>
        </div>

        <div>
          <p>10</p>
          <p>Swamy Vivekananda English High School</p>
          <p>2016</p>
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
