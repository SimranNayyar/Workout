// FileName: index.js

// Import express
let express = require('express')

// Import Cors
var cors = require('cors')

// Initialize the app
let app = express();

// Add cors to app
app.use(cors())

var bodyParser = require('body-parser')

app.use(bodyParser.json());

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Import routes
let apiRoutes = require("./api-routes")

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

