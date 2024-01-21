// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

// port no padrao de variavel estatica
const PORT = 3000;

app.listen(PORT, () => {
    console.log("servidor escutando!");
});

