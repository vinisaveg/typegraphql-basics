import "reflect-metadata";

import { bootstrap } from "./server";

bootstrap()
  .then(() => {
    console.info("Apollo Server running at port: 4000");
  })
  .catch((error) => {
    console.error(error);
  });
