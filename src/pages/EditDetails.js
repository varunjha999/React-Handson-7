import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { studentUpdated } from "../features/StudentSlice";

const EditDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useLocation();
  const dataid = data.state.id;
  const StdDetail = useSelector((state) =>
    state.student.filter((item) => item.id === dataid)
  );

  const stdName = StdDetail[0].Name;
  const stdAge = StdDetail[0].Age;
  const stdCourse = StdDetail[0].Course;
  const stdBatch = StdDetail[0].Batch;

  const [Name, setName] = useState(stdName);
  const [Age, setAge] = useState(stdAge);
  const [Course, setCourse] = useState(stdCourse);
  const [Batch, setBatch] = useState(stdBatch);
  const SubmitHandler = () => {
    if (Name && Age && Course && Batch) {
      dispatch(
        studentUpdated({
          id: dataid,
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
        })
      );
      navigate("/Students");
    }
  };

  const cancelEditDetails = () => {
    navigate("/Students");
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
          <button className="button btn1" onClick={cancelEditDetails}>
            Cancel
          </button>
          <button className="button btn2" onClick={SubmitHandler}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditDetails;
