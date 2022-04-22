import Container from "./components/Container";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Alakesh Bora";
  }, []);
  return <Container />;
}

export default App;
