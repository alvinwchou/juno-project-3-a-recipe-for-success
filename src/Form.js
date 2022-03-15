// Form.js
import { useState } from "react"

export default function Form(props) {
    // const initalValue = {searchItem: "chicken"};
    const [form, setform] = useState({});

    const handleInputChange = (e) => {
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

    const handleSearchSubmit = (e) => {
        props.handleSubmit(e, form);
        setform({ ...form, searchItem: '' });
    };

    return(
        <div className="search">
            <div className="flexContainer">
                <form onSubmit={ handleSearchSubmit }>
                    <div className="searchBar">
                        <label htmlFor="searchItem" className="sr-only">Search recipes</label>
                        <input
                            type="text"
                            name="searchItem"
                            id="searchItem"
                            onChange={handleInputChange}
                            value={form.searchItem}
                            placeholder="search recipes"
                            />
                        <button>Search</button>
                    </div>

                    <div className="filter">
                        <p>Filters </p>
                        <div className="checkBoxes">
                            <div className="options">
                                <input
                                    type="checkbox"
                                    name="balanced"
                                    id="balanced"
                                    // onChange={handleCheck}
                                    value="balanced"
                                />
                                <label htmlFor="balanced">Balanced</label>
                            </div>
                            <div className="options">
                                <input
                                    type="checkbox"
                                    name="highFiber"
                                    id="highFiber"
                                    value="high-fiber"
                                />
                                <label htmlFor="highFiber">High-fiber</label>
                            </div>
                            <div className="options">
                                <input
                                    type="checkbox"
                                    name="highProtein"
                                    id="highProtein"
                                    value="high-protein"
                                />
                                <label htmlFor="highProtein">High-protein</label>
                            </div>

                            <div className="options">
                                <input
                                    type="checkbox"
                                    name="lowCarb"
                                    id="lowCarb"
                                    value="low-carb"
                                />
                                <label htmlFor="lowCarb">Low-carb</label>
                            </div>

                            <div className="options">
                                <input
                                    type="checkbox"
                                    name="lowFat"
                                    id="lowFat"
                                    value="low-fat"
                                />
                                <label htmlFor="lowFat">Low-fat</label>
                            </div>

                            <div className="options">
                                <input
                                    type="checkbox"
                                    name="lowSodium"
                                    id="lowSodium"
                                    value="low-sodium"
                                />
                                <label htmlFor="lowSodium">Low-sodium</label>
                            </div>
                        </div>

                        <div className="dropdown">
                            <label htmlFor="mealType" className="sr-only">Meal type: </label>
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
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
};

