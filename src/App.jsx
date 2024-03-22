import { useState } from "react";
import data from "./assets/emojiList.json";
import "./App.css";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Line from "./components/Line";

function App() {
  const datas = { data };
  const [search, setSearch] = useState("");
  const [copy, setCopy] = useState("");

  return (
    <>
      <main className="container">
        <div className="title">
          <h1>😎 Emoji Search 😎</h1>
        </div>
        <div className="all-content">
          <div className="content">
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="content">
            <Line datas={datas} search={search} copy={copy} setCopy={setCopy} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
