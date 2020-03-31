// module.exports = app => {
// app.get("/register", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/login", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/dashboard", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/dashboard/createProfile", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/allProfiles", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/profile/:handle", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/profile", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/feed", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/dashboard/editProfile", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/dashboard/addEducation", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/dashboard/addExperience", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/post/:id", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
// app.get("/profile/:handle", (req, res) => {
//   res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
// });
//   app.get("/register", (req, res) => {
//     res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
//   });
// };

var path = require("path");

function fallbackHandler(req, res) {
  res.sendFile(path.join(__dirname, "../../../dist", "index.html"));
}

module.exports = fallbackHandler;
