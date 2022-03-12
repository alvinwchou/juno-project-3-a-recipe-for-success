import ApiCall from "./ApiCall";
import Form from "./Form";
import { useState } from "react";

import './App.css';

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
    <div>
      <Form handleSubmit={getSearchParams}/>
      <ApiCall params={searchParams}/>

    </div>
  );
};

export default App;
