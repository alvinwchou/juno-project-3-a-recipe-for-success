// ApiCall.js
import axios from 'axios'
import { useState, useEffect } from 'react'
import GalleryItem from './GalleryItem';

export default function ApiCall(props) {
    const [recipes, setRecipes] = useState([]);
    console.log(props.params);

    useEffect( () => {
        axios({
            url: 'https://api.edamam.com/api/recipes/v2',
            params: {
            app_id: '12a553b5',
            app_key: '6243134e8b4229cae7ecfea70b2a1bb1',
            type: 'public',
            q: props.params,
            diet: null,
            // mealType: null,
            },
        }).then( (apiData) => {
            console.log(apiData);
            setRecipes(apiData.data.hits)
        })
    }, []);

    console.log(recipes);

    return(
        <div>
            <h2>Searched Recipes</h2>
            <ul className="galleryWall">
                {
                    recipes.map( (recipe) => {
                        return(
                            <GalleryItem imgSource={recipe.recipe.image}/>

                        )
                    })
                }
            </ul>
        </div>
    )
};