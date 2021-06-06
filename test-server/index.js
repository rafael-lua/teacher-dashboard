const fs = require("fs");
const path = require("path");

// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

const authorizationChecker = (req, res, next) => {
  const auth = req.get("authorization");
  if (process.env.NODE_ENV === "production" && auth !== process.env.AUTH) {
    return res.status(404).end();
  }

  next();
};

const timestampChecker = (req, res, next) => {
  // Check db.json timestamp and reset its data to default every 1 hour
  const db = router.db.getState();

  if (!db.timestamp.value) {
    db.timestamp.value = new Date().toString();
    router.db.setState(db);
    router.db.write();
    console.log("Initialized a timestamp");
  } else {
    const dateNow = new Date();
    const dateBefore = new Date(db.timestamp.value);
    if ((dateNow - dateBefore) / 1000 / 60 >= 60) {
      // More than one hour passed, reset values
      const backupdb = JSON.parse(
        fs.readFileSync(path.join("db_init.json"), "utf8")
      );
      router.db.setState(backupdb);
      router.db.write();
      console.log(`Database reseted. New timestamp: ${dateNow}`);
    } else {
      db.timestamp.value = new Date().toString();
      console.log(`Database timestamp renewed: ${dateNow}`);
      router.db.setState(db);
      router.db.write();
    }
  }
  next();
};

server.use(cors());
server.use(authorizationChecker);
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(timestampChecker);
server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
