// Form.js
import { useState } from "react"

export default function Form(props) {
    // const initalValue = {searchItem: "chicken"};
    const [form, setform] = useState({});
    console.log(form);

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setform({ ...form, searchItem: e.target.value });
        
    };
    
    const handleSelectChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'anytime') {
            setform({ ...form, mealType: undefined });
        } else {
            setform({ ...form, mealType: e.target.value });
        };
    };

    // dietLabels = {
    //     dietTypes: {

    //     }
    // }
    // const handleCheck = (e) => {
    //     // console.log(e.target.value, e.target.checked);
    //     const {value, checked} = e.target
    //     console.log(value, checked);
    //     this.setform( (e) => {
    //         return e.dietTypes[value] = checked;
    //     })
    // }
    
    return(
        <div className="search">
            <div className="flexContainer">
                <form onSubmit={ (e) => props.handleSubmit(e, form)}>
                {/* {Object.keys(this.dietLabels.dietTypes.filter((x)=> {this.dietLabels.dietTypes[x]}))} */}
                    <label htmlFor="searchItem">Search recipes</label>
                    <input
                        type="text"
                        name="searchItem"
                        id="searchItem"
                        onChange={handleInputChange}
                        value={form.searchItem}
                        />

                    <br />
                    <label htmlFor="mealType">Meal type: </label>
                    <select
                        name="mealType"
                        id="mealType"
                        onChange={handleSelectChange}
                        value={form.mealType}
                        >
                        <option value="anytime">Anytime</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                        <option value="Teatime">Teatime</option>
                    </select>


                    <p>Diet type: </p>
                    <div className="dietType">
                        <input
                            type="checkbox"
                            name="balanced"
                            id="balanced"
                            // onChange={handleCheck}
                            value="balanced"
                        />
                        <label htmlFor="balanced">Balanced</label>
                        <br />
                        <input
                            type="checkbox"
                            name="highFiber"
                            id="highFiber"
                            value="high-fiber"
                        />
                        <label htmlFor="highFiber">High-fiber</label>
                        <br />
                        <input
                            type="checkbox"
                            name="highProtein"
                            id="highProtein"
                            value="high-protein"
                        />
                        <label htmlFor="highProtein">High-protein</label>
                        <br />
                        <input
                            type="checkbox"
                            name="lowCarb"
                            id="lowCarb"
                            value="low-carb"
                        />
                        <label htmlFor="lowCarb">Low-carb</label>
                        <br />
                        <input
                            type="checkbox"
                            name="lowFat"
                            id="lowFat"
                            value="low-fat"
                        />
                        <label htmlFor="lowFat">Low-fat</label>
                        <br />
                        <input
                            type="checkbox"
                            name="lowSodium"
                            id="lowSodium"
                            value="low-sodium"
                        />
                        <label htmlFor="lowSodium">Low-sodium</label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};