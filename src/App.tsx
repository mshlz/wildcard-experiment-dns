import type { Component } from "solid-js"
import { onMount, createSignal } from "solid-js"

const App: Component = () => {
  const [name, setName] = createSignal("")
  onMount(() => {
    const subdomain = window.location.hostname.split(".")?.[0]
    setName(subdomain)
  })

  return (
    <>
      <h1>Hello<br/>{name()}<br/>!!!!</h1>
    </>
  );
};

export default App;
