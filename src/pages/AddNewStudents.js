import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentAdded } from "../features/StudentSlice";
import { useDispatch, useSelector } from "react-redux";

const AddNewStudents = () => {
  const data = useSelector((state) => state.student);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Course, setCourse] = useState("");
  const [Batch, setBatch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cancelAddStudent = () => {
    navigate("/Students");
  };

  const SubmitNewStudent = () => {
    if (Name && Age && Course && Batch) {
      dispatch(
        studentAdded({
          id: data.length,
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
        })
      );
      navigate("/Students");
    }
  };
  return (
    <>
      <div className="container">
        <div className="form">
          <fieldset className="field">
            <legend> Name </legend>
            <input
              type="text"
              name="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset className="field">
            <legend> Age </legend>
            <input
              type="number"
              name="Age"
              value={Age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>

          <fieldset className="field">
            <legend> Course </legend>
            <input
              type="text"
              name="Course"
              value={Course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </fieldset>

          <fieldset className="field">
            <legend> Batch </legend>
            <input
              type="text"
              name="Batch"
              value={Batch}
              onChange={(e) => setBatch(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="grid-btn">
          <button
            className="button btn1"
            onClick={cancelAddStudent}
            style={{ backgroundColor: "gray" }}
          >
            Cancel
          </button>
          <button className="button btn2" onClick={SubmitNewStudent}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewStudents;
