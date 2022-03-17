// Form.js
import { useState } from "react"

export default function Form(props) {
    // user inputs
    const [form, setform] = useState({});
    useState( () => {
        setform({
            balanced: {checked: false},
            highFiber: {checked: false},
            highProtein: {checked: false},
            lowCarb: {checked: false},
            lowFat: {checked: false},
            lowSodium: {checked: false},
        });
    }, []);

    // checkboxes
    const [check, setCkeck] = useState({})
    useState( () => {
        setCkeck({
            balanced: false,
            highFiber: false,
            highProtein: false,
            lowCarb: false,
            lowFat: false,
            lowSodium: false,
        });
    }, [])

    // show filter true or false
    const [showFilter, setShowFilter] = useState(false)
    
    // input text
    const handleInputChange = (e) => {
        setform({ ...form, searchItem: e.target.value });
    };
    
    // input checkbox
    const handleInputCheckbox = (e) => {
        if (e.target.checked) {
            setform({ ...form, [e.target.name]: {[e.target.name]: e.target.value, checked: true} });
        } else {
            setform({ ...form, [e.target.name]: {[e.target.name]: null, checked: false} })
        }
    }

    // select
    const handleSelectChange = (e) => {
        if (e.target.value === 'anytime') {
            setform({ ...form, mealType: undefined });
        } else {
            setform({ ...form, mealType: e.target.value });
        };
    };

    // submit
    const handleSearchSubmit = (e) => {
        props.handleSubmit(e, form);
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
                            required
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
                                            onChange={ handleInputCheckbox }
                                            value="balanced"
                                            checked={form.balanced.checked}
                                        />
                                        <label htmlFor="balanced">Balanced</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="highFiber"
                                            id="highFiber"
                                            onChange={ handleInputCheckbox }
                                            value="high-fiber"
                                            checked={form.highFiber.checked}
                                        />
                                        <label htmlFor="highFiber">High-fiber</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="highProtein"
                                            id="highProtein"
                                            onChange={ handleInputCheckbox }
                                            value="high-protein"
                                            checked={form.highProtein.checked}
                                        />
                                        <label htmlFor="highProtein">High-protein</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="lowCarb"
                                            id="lowCarb"
                                            onChange={ handleInputCheckbox }
                                            value="low-carb"
                                            checked={form.lowCarb.checked}
                                        />
                                        <label htmlFor="lowCarb">Low-carb</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="lowFat"
                                            id="lowFat"
                                            onChange={ handleInputCheckbox }
                                            value="low-fat"
                                            checked={form.lowFat.checked}
                                        />
                                        <label htmlFor="lowFat">Low-fat</label>
                                    </div>
                                    <div className="options">
                                        <input
                                            type="checkbox"
                                            name="lowSodium"
                                            id="lowSodium"
                                            onChange={ handleInputCheckbox }
                                            value="low-sodium"
                                            checked={form.lowSodium.checked}
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

