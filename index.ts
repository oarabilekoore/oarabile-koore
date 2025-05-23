import { Application, PageRouterConfig } from "viewkit-ui";
import HomePage from "./resources/pages/index.ts";

const route_config: PageRouterConfig = {
    mode: "history",
    routes: [
        {
            path: "./",
            component: HomePage,
        },
    ],
};
export const app = new Application({
    title: "Oarabile Koore",
    routes: route_config,
    allowzoom: false,
    scrollbarvisibility: "hidden",
});

app.onStart(HomePage);
