import useWindowDimensions from './useWindowDimensions';

// Recipe.js

export default function Recipe(props) {
    const { width } = useWindowDimensions();

    return(
        <div className="recipeContainer">
            <div className="recipe">
                <div className="back">
                    <p onClick={ () => props.handleClickBack() }>
                        {
                            width > 500 
                            ? 'back'
                            : '<'
                        }
                    </p>
                </div>
            
                <h3>{props.title}</h3>
            
                <p className="feat">Featured in {props.featured}</p>
            
                <p className="cuisine">Cuisine: <span className="caps">{props.cuisine}</span></p>
            
                <p className="meal">Meal type: <span className="caps">{props.meal}</span></p>
            
                <p className="dish">Dish type: <span className="caps">{props.dish}</span></p>
            
                {
                    props.time > 0
                    ? <p className="time">Ready in {props.time} minutes</p>
                    : <br />
                }
                <div className="imageContainer">
                    <img src={props.imgSorce} alt={props.title} />
                </div>
            
                <div className="ingredientsContainer">
                    <h3>Ingredients</h3>
                    <ul>
                        {
                            props.ingredients.map( (ingredient) => {
                                return (
                                    <li>{ingredient}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="link">
                    <a href={`${props.url}`}target="_blank">Full recipe here</a>
                </div>
            
                {
                    props.handleClickSave
                    ? <p className="save" onClick={ () => props.handleClickSave() }>Save for later</p>
                    : <p className="save" onClick={ () => props.handleClickRemove(props.remove) }>Remove from saved</p>
                }
            </div>
        </div>
    )
}