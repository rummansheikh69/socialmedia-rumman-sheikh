import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <div>Hello World</div>
    </MantineProvider>
  );
}

export default App;
