const express = require("express");
const https = require("https");
var path = require("path");
const axios = require("axios").default;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/menu", async (req, res) => {
  let json = "";
  var d = new Date();
  let diningHall = req.query.diningHall;
  if (diningHall == "") {
    return "Empty Query";
  }

  const { data } = await axios.get(
    "https://api.hfs.purdue.edu/menus/v2/locations/" +
      diningHall +
      "/" +
      d.getFullYear() +
      "-" +
      d.getMonth() +
      "-" +
      d.getDate()
  );
  const [breakfast, lunch] = data.Meals;
  const dinner = data.Meals[data.Meals.length - 1];

  const lunchItems = diningHall.lunch.Stations.map(station =>
    station.Items.map(item => item.Name)
  ).reduce((prev, station) => prev.concat(...station), []);

  res.send(lunchItems);

  const breakItems = diningHall.breakfast.Stations.map(station =>
    station.Items.map(item => item.Name)
  ).reduce((prev, station) => prev.concat(...station), []);

  res.send(breakItems);

  const dinnerItems = diningHall.dinner.Stations.map(station =>
    station.Items.map(item => item.Name)
  ).reduce((prev, station) => prev.concat(...station), []);

  res.send(dinnerItems);
});

app.listen(3000, () => console.log("Gator app listening on port 3000!"));
