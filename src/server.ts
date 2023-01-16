import express, { Express } from "express";
import { Server } from "http";
import { HealthCheckController } from "./domains/healthcheck/healthcheck.controller";
import { HearbeatController } from "./domains/heartbeat/hearbeat.controller";

function setRoutes(basePath: string, expressServer: Express): void {
  expressServer.use(basePath, new HearbeatController().router);
  expressServer.use('', new HealthCheckController().router);
}

function startServer(expressServer: Express): Server {
    const DEFAULT_TEST_PORT = '3333';
    const port: string = process.env.APP_PORT ?? DEFAULT_TEST_PORT;
    return expressServer.listen(port, () => {
        console.log(`The server is running on port ${port}`);
    });
}

function bootstrap(): { BASE_PATH: string; server: Server } {
  const server = express();
  server.use(express.json());
  const BASE_PATH = "/api/v1";

  setRoutes(BASE_PATH, server);

  return {
    BASE_PATH,
    server: startServer(server),
  };
}

const main = bootstrap();
export default main;
