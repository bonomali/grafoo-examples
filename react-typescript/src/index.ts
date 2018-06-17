import "./globalstyles";

import createClient from "@grafoo/core";
import bootstrap from "./bootstrap";

const client = createClient("https://api.graph.cool/simple/v1/cj28ccc28umr50115gjodwzix");

if (process.env.NODE_ENV !== "production") (window as any).client = client;

bootstrap(client);

if ((module as any).hot) {
  (module as any).hot.accept(["./bootstrap"], () => {
    const { default: nextBootstrap } = require("./bootstrap");

    nextBootstrap(client);
  });
}
