/* @refresh reload */
import { render } from "solid-js/web"
import App from "./App"
import "./global.css"

const dispose = render(() => <App />, document.getElementById("root") as HTMLElement)

if (import.meta.hot) {
  import.meta.hot.dispose(dispose)
}
