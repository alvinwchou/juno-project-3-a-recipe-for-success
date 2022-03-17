import ApiCall from "./ApiCall";
import Form from "./Form";
import { useState } from "react";

import './App.css';


function App() {
  const [searchParams, setSearchParams] = useState(null);

  const getSearchParams = (e, filter) => {
    e.preventDefault();
    setSearchParams(filter);
  };

  return (
    <div className="app">
      <section className="header">
        <div className="title">
          <h1>A Recipe for Success</h1>
        </div>
        <Form handleSubmit={getSearchParams}/>
      </section>
      <section className="main">
        <ApiCall params={searchParams}/>
      </section>
      <section className="footer">
        <p>Created by <a href="https://www.alvinwchou.com/">Alvin Chou</a> at <a href="https://junocollege.com/">Juno College</a></p>
      </section>
    </div>
  );
};

export default App;