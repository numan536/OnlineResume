const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fallback = require("express-history-api-fallback");

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.static(require("path").join(__dirname, "../dist")));

mongoose
  .connect(require("./config/keys").mongoUri)
  .then(() => console.log("connection successfull"))
  .catch(e => {
    throw e;
  });

require("./passport")();

app.use("/api/user", require("./routes/api/users.js"));
app.use("/api/profile", require("./routes/api/profiles.js"));
app.use("/api/post", require("./routes/api/posts.js"));
require("./routes")(app);

// app.get("*", (req, res) => {
//   res.sendFile(require("path").resolve(__dirname, "../dist", "index.html"));
// });

// app.use(
//   fallback("index.html", { root: require("path").join(__dirname, "../dist") })
// );

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("node is listening on port", port));
