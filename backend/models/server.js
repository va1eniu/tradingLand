import express from "express";
import cors from "cors";
import routerAcciones from "../routes/acciones.routes.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.actionPath = "/api/acciones";
    this.routes();
    
  }

  routes() {
    this.app.use(this.actionPath , routerAcciones);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json())
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`listen by port ${this.port}`);
    });
  }
}

export default Server;
