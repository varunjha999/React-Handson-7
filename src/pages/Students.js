import React from "react";
import { useSelector } from "react-redux";
import TableRow from "../Component/TableRow";
import { useNavigate } from "react-router-dom";
const Students = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.student);
  //  console.log("Data is here",data)
  const AddNewStudent = () => {
    navigate("/AddnewStudent");
  };

  return (
    <>
      <div className="container">
        <header>
          <h1 className="head1">Student Details</h1>
          <button className="btn" onClick={AddNewStudent}>
            Add new student
          </button>
        </header>
        <table id="details">
          <thead>
            <tr>
              <td className="t-head">Name</td>
              <td className="t-head">Age</td>
              <td className="t-head">Course</td>
              <td className="t-head">Batch</td>
              <td className="t-head">Change</td>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => {
              return (
                <tr key={student.id}>
                  <TableRow student={student} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Students;
