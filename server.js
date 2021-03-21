const express = require ("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("Listen on Port: http://localhost:" + PORT);
})