import ApiCall from "./ApiCall";
import Form from "./Form";
import { useState } from "react";

import './App.css';

// import './assets/css/fonts.css'

function App() {
  const [searchParams, setSearhParams] = useState(null);
  console.log(searchParams);

  const getSearchParams = (e, refined) => {
    e.preventDefault();
    console.log(refined);
    setSearhParams(refined);
    console.log(searchParams);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="title">
          <h1>A Recipe for Success</h1>
        </div>
        <Form handleSubmit={getSearchParams}/>
      </div>
      <div className="main">
        <ApiCall params={searchParams}/>
      </div>

    </div>
  );
};

export default App;
