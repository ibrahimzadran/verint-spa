import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes({
  routes: [
    {
      type: "route",
      path: "app1",
      routes: [
        { type: "application", name: "verint-org/app1" },
      ],
    },
    {
      type: "route",
      path: "app2",
      routes: [
        { type: "application", name: "verint-org/app2" },
      ],
    },
  ],
});

const applications = constructApplications({
  routes,
  loadApp: (app) => System.import(app.name),
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();