// Form.js
import useWindowDimensions from './useWindowDimensions';


import { useState } from "react"

export default function Form(props) {
    // user inputs
    const [form, setform] = useState({});

    // checkboxes
    // const [check, setCkeck] = useState({
    //     balanced: {checked: false},
    //     highFiber: {checked: false},
    //     highProtein: {checked: false},
    //     lowCarb: {checked: false},
    //     lowFat: {checked: false},
    //     lowSodium: {checked: false},
    // });

    // show filter true or false
    const [showFilter, setShowFilter] = useState(false)
    
    // input text
    const handleInputChange = (e) => {
        setform({ ...form, searchItem: e.target.value });
    };
    
    // input checkbox
    // const handleInputCheckbox = (e) => {
    //     setCkeck({ ...check, [e.target.name]: {value: e.target.value, checked: !check[e.target.name].checked}})
    //     // setCkeck({ ...check, [e.target.value]: {checked: !check.balanced}})
    //     console.log(check);
    // }

    // select
    const handleSelectChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'anytime') {
            setform({ ...form, mealType: undefined });
        } else {
            setform({ ...form, mealType: e.target.value });
        };
    };

    // submit
    const handleSearchSubmit = (e) => {
        props.handleSubmit(e, form);
        console.log(form);
        setform({ ...form, searchItem: '' });
    };

    // show/hide filter options
    const handleClick = () => {
        setShowFilter(!showFilter);
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
                        {
                            showFilter
                                ? <p onClick={ handleClick }>↑ Filters ↑</p>
                                : <p onClick={ handleClick }>↓ Filters ↓</p>
                        }
                        {
                            showFilter
                            ? <div className="filterContainer">
                                <div className="checkBoxes">
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="balanced"
                                            id="balanced"
                                            // onChange={ handleInputCheckbox }
                                            value="balanced"
                                            // checked={check.balanced.checked}
                                        />
                                        <label htmlFor="balanced">Balanced</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="highFiber"
                                            id="highFiber"
                                            // onChange={ handleInputCheckbox }
                                            value="high-fiber"
                                            // checked={check.highFiber.checked}
                                        />
                                        <label htmlFor="highFiber">High-fiber</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="highProtein"
                                            id="highProtein"
                                            // onChange={ handleInputCheckbox }
                                            value="high-protein"
                                            // checked={check.highProtein.checked}
                                        />
                                        <label htmlFor="highProtein">High-protein</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="lowCarb"
                                            id="lowCarb"
                                            // onChange={ handleInputCheckbox }
                                            value="low-carb"
                                            // checked={check.lowCarb.checked}
                                        />
                                        <label htmlFor="lowCarb">Low-carb</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="lowFat"
                                            id="lowFat"
                                            // onChange={ handleInputCheckbox }
                                            value="low-fat"
                                            // checked={check.lowFat.checked}
                                        />
                                        <label htmlFor="lowFat">Low-fat</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="lowSodium"
                                            id="lowSodium"
                                            // onChange={ handleInputCheckbox }
                                            value="low-sodium"
                                            // checked={check.lowSodium.checked}
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
                            : null
                        }

                    </div>


                </form>
            </div>
        </div>
    )
};

