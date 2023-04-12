import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ student, student: { id, Name, Age, Course, Batch } }) => {
  return (
    <>
      <td className="t-head">{Name}</td>
      <td className="t-head">{Age}</td>
      <td className="t-head">{Course}</td>
      <td className="t-head">{Batch}</td>
      <td>
        <Link to="/EditDetails" state={{ id }}>
          Edit
        </Link>
      </td>
    </>
  );
};

export default TableRow;
