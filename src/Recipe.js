// Recipe.js

export default function Recipe(props) {
    return(
        <div style={{width:'500px'}}>
            <h2>{props.title}</h2>
            <p>featured in {props.featured}</p>
            <p>Ready in {props.time} minutes</p>
            <img src={props.imgSorce} alt={props.title} />
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
            <a href={`${props.url}`}>Full recipe here</a>
        </div>
    )
}