import React from "react";
import "./components/css/App.css";
import Header from "./components/noteComponents/header";
import Notes from "./components/noteComponents/notes";
import Footer from "./components/noteComponents/footer";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
