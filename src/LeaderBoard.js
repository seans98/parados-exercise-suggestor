import { useEffect, useState } from "react";
import classes from "./LeaderBoard.module.css";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

const LeaderBoard = () => {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    const url = "https://api.hatchways.io/assessment/students";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const transformedData = data.students.map((student) => {
          student.tags = [];
          student.toggled = false;
          student.hasTag = false;
          return student;
        });
        setStudentData(transformedData);
      });
  }, []);

  return studentData.map((student, index) => {
    return (
      <div key={student.city}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={`${student.pic}`}
              alt="Robo"
              style={{ height: "100px", width: "100px", border: "1px solid" }}
            />
          </ListItemAvatar>

          <ListItemText
            component={"span"}
            primary={
              <h3 className={classes.header}>
                {`${index+1}. `}{student.firstName.toUpperCase()}{" "}
                {student.lastName.toUpperCase()}
              </h3>
            }
            secondary={
              <>
                <p className={classes.paragraph}>Email: {student.email}</p>
                <p className={classes.paragraph}>Company: {student.company}</p>
                <p className={classes.paragraph}>Skill: {student.skill}</p>
              </>
            }
          />
        </ListItem>
        <Divider />
      </div>
    );
  });
};
export default LeaderBoard;
