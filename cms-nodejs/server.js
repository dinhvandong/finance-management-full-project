// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require("path");
// if (process.env.NODE_ENV === "production") {
//     app.use("/", express.static("client/build"));

//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//     });
//   }

//   app.get("/", (req, res) => res.send("Hello World!"));

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });


app.use("/", express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });