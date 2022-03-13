import App from "./App.svelte";
import "./app.css";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
