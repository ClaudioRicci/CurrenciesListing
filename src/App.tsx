import React from "react";
import "./App.css";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";

function App() {
  return (
    <div className="App">
      <Header title="Currencies Table" />
      <table>
        <TableHeader />
      </table>
    </div>
  );
}

export default App;
