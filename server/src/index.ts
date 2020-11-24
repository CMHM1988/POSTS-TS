import { Server } from "./config/server";

// Inicializando nueva instancia de un servidor.
const server: Server = new Server();

// Inicializando el servidor.
server.app.listen(server.app.get("port"), () => {
	// Success Server Message.
	console.log(`Server on port ${server.app.get("port")}`);
});
