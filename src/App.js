import React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import YoutubeEmbed from "./YoutubeEmbed";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Survery from "./Survey";
import LeaderBoard from "./LeaderBoard";
import classes from "./App.module.css";
export default function App() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <h1>Paraos Web Application</h1>
      <p>
        Welcome to the Parados webpage. Here we outline some exercises you can
        do to improve performance or whatever you want to put here
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>
            <h2>DASHBOARD</h2>
          </Item>
          <Item className={classes.scroll}>
            <LeaderBoard />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <h2>Posture Correcting Exercise</h2>
            <YoutubeEmbed embedId="fBn8u_Dlgtc" />
            <p>
              This is the description of the exercise we can put the benefits or
              a transcript of the exercise and a quick summary up 2 yall{" "}
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <h2>Neck Correcting Exercise</h2>
            <YoutubeEmbed embedId="h3Va238a-8Y" />
            <p>
              This is the description of the exercise we can put the benefits or
              a transcript of the exercise and a quick summary up 2 yall{" "}
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <h2>Stress Management</h2>
            <YoutubeEmbed embedId="grfXR6FAsI8" />
            <p>
              This is the description of the exercise we can put the benefits or
              a transcript of the exercise and a quick summary up 2 yall{" "}
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} alignItems="center">
          <Item>
            <Survery />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
