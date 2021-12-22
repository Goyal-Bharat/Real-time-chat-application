import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Hello BharatDev, Let's build real time chat application </h1>

      {/* Header */}

      <Header />

      <div className="app__body">
        <Sidebar />
        

        {/* React-Router --> Chat screen */}
      </div>
    </div>
  );
}

export default App;
