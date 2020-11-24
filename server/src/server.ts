import app from "./config/app";

app.listen(app.get("port"));

console.log(`Server ejecutado en el puerto ${app.get("port")}`);
