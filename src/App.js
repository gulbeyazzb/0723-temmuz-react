import Counter, { PI } from "./components/Counter";
import "./App.css";
import { useState } from "react";
import Main from "./layout/Main";

// App Componenti - Root Component
function App() {
  // Componentin JS Bölümü
  const [userName, setUserName] = useState("Anonim");

  // Props Drilling
  
  return (
    // Componentin Template Bölümü
    // HTML değil JSX dili!
    // Layout Componentleri
    <Main userName={userName} />
  );
}

export default App;
