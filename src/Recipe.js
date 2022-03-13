// Recipe.js

export default function Recipe(props) {
    return(
        <div className="recipeCard">
            
                <h3>{props.title}</h3>
                <p className="feat">Featured in {props.featured}</p>
                <p className="cuisine">Cuisine: {props.cuisine}</p>
                <p className="meal">Meal type: {props.meal}</p>
                <p className="dish">Dish type: {props.dish}</p>
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
                        <a href={`${props.url}`}>Full recipe here</a>
                    </div>


        </div>
    )
}