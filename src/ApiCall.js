// ApiCall.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import Recipe from './Recipe';

export default function ApiCall(props) {
    const [recipes, setRecipes] = useState([]);
    console.log(props.params);
    // console.log(props.params.searchItem);

    useEffect( () => {
        setTimeout( () => {
            console.log('timeout');
            axios({
                url: 'https://api.edamam.com/api/recipes/v2',
                params: {
                app_id: '12a553b5',
                app_key: '6243134e8b4229cae7ecfea70b2a1bb1',
                type: 'public',
                q: props.params.searchItem,
                mealType: props.params.mealType,
                diet: null,
                },
            }).then( (apiData) => {
                console.log(apiData);
                setRecipes(apiData.data.hits)
            }).catch( (err) => {
                console.log(err);
            })
        }, 100)
    }, [props]);

    const [display, setDisplay] = useState(null);

    const getDisplay = (e) => {
        // setDisplay(!display)
        console.log('APICALL DISPLAY???? ', display);
        console.log(e.target.parentElement.childNodes[1].innerText);
        setDisplay(e.target.parentElement.childNodes[1].innerText)
    };

    console.log(recipes);
    
    return(
        <div>
            <h2>Searched Recipes</h2>
            <ul className="galleryWall">
                {
                    recipes.map( (recipe) => {
                        // console.log(recipe)
                        
                        return(
                            <GalleryItem
                                handleButton={ getDisplay }
                                imgSource={recipe.recipe.image}
                                title={recipe.recipe.label}
                                cuisineType={recipe.recipe.cuisineType}
                            />
                            
                        )
                    })
                }
            </ul>
            <h3>{display}</h3>
            {
                recipes.map( (recipe) => {
                    return(
                        recipe.recipe.label === display 
                        ? <Recipe 
                            title={recipe.recipe.label}
                            featured={recipe.recipe.source}
                            time={recipe.recipe.totalTime}
                            imgSorce={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredientLines}
                            url={recipe.recipe.url}
                        />
                        : null
                    )
                })
            }
        </div>
    )
};