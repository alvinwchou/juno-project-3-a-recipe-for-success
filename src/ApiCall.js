// ApiCall.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import Recipe from './Recipe';
import useWindowDimensions from './useWindowDimensions';

export default function ApiCall(props) {
    const [recipes, setRecipes] = useState([]);
    console.log(props.params);
    // console.log(props.params.searchItem);

    // const [position, setPosition] = useState({startingPoints: {top: 0, bottom: 0, left: 0, right: 0}});
    // console.log(position)   ;

    const [showRECIPE, setShowRECIPE] = useState(true)



    // // inital styling for recipe popup
    // const [showRecipe, setShowRecipe] = useState({
    //     // position: 'fixed', 
    //     // top: '0',
    //     // height: '0',
    //     // left: '0',
    //     // width: '0',
    //     // // maxWidth:'500px',
    //     // overflow: 'hidden',
    //     // backgroundColor: "rgba(170, 238, 196, 0.692)",
    //     // zIndex: '-1',
    //     display: 'none'
    // })
    // console.log(showRecipe)

    // toggle between false and true class styling
    const [showRecipeBg, setShowRecipeBg] = useState(false)

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
                setShowRECIPE(true)
                console.log(recipes);
            }).catch( (err) => {
                console.log(err);
            })
        }, 100)
    }, [props]);

    const [display, setDisplay] = useState(null);
    const { height, width } = useWindowDimensions();
    console.log(height);

    const getClickedItemInfo = (e) => {
        console.log('APICALL DISPLAY???? ', display);
        console.log(e);
        setDisplay(e.target.parentElement.id)
        setShowRECIPE(!showRECIPE)
    };

    
    const getBackClick = (e) => {
        setShowRECIPE(!showRECIPE)
    };

    return(
        <div className='apiCall'> 
            <h2>Searched Recipes</h2>
            {   
                showRECIPE 
                ? <ul className="galleryWall">
                    {
                        recipes.map( (recipe) => {
                            // console.log(recipe)
                            
                            return(
                                <GalleryItem
                                    handleButton={ getClickedItemInfo }
                                    imgSource={recipe.recipe.image}
                                    title={recipe.recipe.label}
                                    id={recipe.recipe.url}
                                    // cuisineType={recipe.recipe.cuisineType}
                                />
                            )
                        })
                    }
                </ul>
                : <div className="recipeCard">
                    {
                        recipes.map( (recipe) => {
                            return(
                                recipe.recipe.url === display 
                                ? <Recipe 
                                    title={recipe.recipe.label}
                                    featured={recipe.recipe.source}
                                    time={recipe.recipe.totalTime}
                                    imgSorce={recipe.recipe.image}
                                    ingredients={recipe.recipe.ingredientLines}
                                    url={recipe.recipe.url}
                                    cuisine={recipe.recipe.cuisineType}
                                    meal={recipe.recipe.mealType}
                                    dish={recipe.recipe.dishType}
                                    getBackClick={ getBackClick }
                                />
                                : null
                            )
                        })
                    }
                </div>
            }
        </div>
    )
};