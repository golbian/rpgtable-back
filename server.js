require('dotenv').config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
const url = 'mongodb://'+process.env.DB_USER +':'+ process.env.DB_PASSWORD +'@'+ process.env.MONGO_CONNECTION_URL+"/"+ process.env.DB_NAME;
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    origin: "https://"+ process.env.URL +":"+ process.env.PORT_FRONT,
    methods: ["GET", "POST"], 
    allowedHeaders: ["Access-Control-Allow-Origin"], 
    credentials: true  
  }
});

db.mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

var corsOptions = {
    origin: "https://"+ process.env.URL +":"+ process.env.PORT_FRONT
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RPG-Table application." });
});

require("./routes/auth.routes")(app);
require("./routes/character.routes")(app);
require("./routes/map.routes")(app);
require("./routes/table.routes")(app);
// require("./routes/roles.routes")(app);
require("./routes/user.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT_SERVER
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

io.on('connection', (socket) =>{
  console.log(`Connecté au client ${socket.id}`)
  socket.on('example', data => {
      console.log(data)
  })
})