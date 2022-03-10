import ApiCall from "./ApiCall";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [searchParams, setSearhParams] = useState(null);

  const getSearchParams = (e, refined) => {
    e.preventDefault();
    console.log(refined);
    setSearhParams(refined);
  };

  return (
    <div>
      <Form handleSubmit={getSearchParams}/>
      <ApiCall params={searchParams}/>

    </div>
  );
};

export default App;
