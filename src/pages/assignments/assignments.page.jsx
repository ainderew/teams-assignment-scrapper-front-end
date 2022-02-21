import { React, useState, useEffect } from "react";
import Styles from "./assignment.module.scss";

const PAGE_ASSIGNMENT = () => {
  const [assignments, setAssignments] = useState([]);
  const url = "https://teams-assignment-collector.herokuapp.com/getAssignments";
  useEffect(() => {
    console.log("fetching...");
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAssignments(data);
      });
  }, []);

  return (
    <div className={Styles.div_main}>
      <div className={Styles.top}></div>
      <div className={Styles.middle}></div>
      <div className={Styles.bottom}>
        <span className={Styles.span_header}>In Progress</span>
{/* 
        <div className={Styles.div_tasks_container}>
          <div className={Styles.div_assignment_container}>
            <span className={Styles.span_title}>
              Assignment #1 Something about the human body
            </span>
          </div>
          <div className={Styles.div_assignment_container}>
            <span className={Styles.span_title}>
              Assignment #1 Something about the human body
            </span>
          </div>
          <div className={Styles.div_assignment_container}>
            <span className={Styles.span_title}>
              Assignment #1 Something about the human body
            </span>
          </div>
          <div className={Styles.div_assignment_container}>
            <span className={Styles.span_title}>
              Assignment #1 Something about the human body
            </span>
          </div>
          <div className={Styles.div_assignment_container}>
            <span className={Styles.span_title}>
              Assignment #1 Something about the human body
            </span>
          </div>
        </div> */}

        {assignments.map((el) => {
          return (
            <div className={Styles.div_assignment_container}>
              <span className={Styles.span_title}>{el.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PAGE_ASSIGNMENT;
