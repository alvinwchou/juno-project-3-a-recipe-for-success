import ApiCall from "./ApiCall";
import Form from "./Form";
import { useState } from "react";

import './App.css';


function App() {
  const [searchParams, setSearhParams] = useState({});
  console.log(searchParams);

  const getSearchParams = (e, filter) => {
    e.preventDefault();
    console.log(filter);
    setSearhParams(filter);
    console.log(searchParams);
    // setSearhParams({...searchParams, dietType: null})
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
