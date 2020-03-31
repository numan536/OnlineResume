module.exports = app => {
  app.get("/register", require("./api/fallback"));
  app.get("/login", require("./api/fallback"));
  app.get("/dashboard", require("./api/fallback"));
  app.get("/dashboard/createProfile", require("./api/fallback"));
  app.get("/allProfiles", require("./api/fallback"));
  app.get("/profile/:handle", require("./api/fallback"));
  app.get("/profile", require("./api/fallback"));
  app.get("/feed", require("./api/fallback"));
  app.get("/dashboard/editProfile", require("./api/fallback"));
  app.get("/dashboard/addEducation", require("./api/fallback"));
  app.get("/dashboard/addExperience", require("./api/fallback"));
  app.get("/post/:id", require("./api/fallback"));
  app.get("/profile/:handle", require("./api/fallback"));
  app.get("*", require("./api/fallback"));
};
