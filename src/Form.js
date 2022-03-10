// Form.js
import { useState } from "react"

export default function Form(props) {
    const [newSearch, setNewSearch] = useState(null);

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setNewSearch(e.target.value)
    };

    return(
        <form action="" onSubmit={ (e) => props.handleSubmit(e, newSearch)}>
            <label htmlFor="">Search recipes</label>
            <input
                type="text"
                id="newSearch"
                name="newSearch"
                onChange={handleInputChange}
                value={newSearch}
            />
            <button>Submit</button>
        </form>
    )
};