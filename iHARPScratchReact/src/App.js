import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Table from "react-bootstrap/Table";

import Map from "./components/Map";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -15,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const FakeData = [
    { longitude: -74.006, latitude: 40.7128, temperature: 25 },
    { longitude: -73.935, latitude: 40.7306, temperature: 23 },
    { longitude: -118.2437, latitude: 34.0522, temperature: 28 },
    { longitude: -122.4194, latitude: 37.7749, temperature: 20 },
    { longitude: -87.6298, latitude: 41.8781, temperature: 22 },
    { longitude: -95.3698, latitude: 29.7604, temperature: 30 },
    { longitude: -80.1918, latitude: 25.7617, temperature: 31 },
    { longitude: -77.0369, latitude: 38.9072, temperature: 19 },
    { longitude: -71.0589, latitude: 42.3601, temperature: 17 },
    { longitude: -87.6232, latitude: 41.8819, temperature: 26 },
    { longitude: -81.6557, latitude: 30.3322, temperature: 29 },
    { longitude: -77.4443, latitude: 37.5407, temperature: 18 },
    { longitude: -96.7969, latitude: 32.7767, temperature: 27 },
    { longitude: -82.4572, latitude: 27.9506, temperature: 24 },
    { longitude: -86.1581, latitude: 39.7684, temperature: 21 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Map />
          <Box
            component="ul"
            sx={{ display: "flex", gap: 1, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Card
              component="li"
              sx={{ maxWidth: 500, backgroundColor: "white" }}
            >
              <CardContent>
                {/* <div component="li" style={{ maxWidth: 500 }}> */}
                <img
                  src={require("./assets/temp_per_day.png")}
                  loading="lazy"
                  alt="Time Series Graph"
                  controls
                />
                {/* </div> */}
              </CardContent>
            </Card>
            <div component="li" style={{ maxWidth: 500 }}>
              <video
                controls
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
                style={{ width: "100%", height: "100%" }}
              >
                <source
                  src={require("./assets/heatmapVideo.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div component="li">
              <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                <Table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Longitude</th>
                      <th>Latitude</th>
                      <th>Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FakeData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.longitude}</td>
                        <td>{data.latitude}</td>
                        <td>{data.temperature}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Box>
        </main>
      </div>
    </ThemeProvider>
  );
}
