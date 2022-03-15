// ApiCall.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import Recipe from './Recipe';
import useWindowDimensions from './useWindowDimensions';
import ErrorMessage from './ErrorMessage';

export default function ApiCall(props) {
    const [recipes, setRecipes] = useState([]);
    
    // toggle between searched recipe and each recipe
    const [showRecipe, setShowRecipe] = useState(true);
    
    // show more button
    const [showMore, setShowMore] = useState(null);
    
    // toggle between false and true class styling
    const [error, setError] = useState(false);
    

    const [display, setDisplay] = useState(null);

    // for window dimensions
    const { height, width } = useWindowDimensions();
    
    useEffect( () => {
        setTimeout( () => {
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
                setRecipes(apiData.data.hits)
                setShowRecipe(true)
                setShowMore(apiData.data._links.next.href)
            }).catch( (err) => {
                setError(true);
                axios({
                    url: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=12a553b5&app_key=6243134e8b4229cae7ecfea70b2a1bb1&diet=balanced&random=true'
                }).then( (apiData) => {
                    setRecipes(apiData.data.hits)
                    setShowRecipe(true)
                })
            })
        }, 10)
    }, [props]);


    const getClickedItemInfo = (e) => {
        setDisplay(e.target.parentElement.id)
        setShowRecipe(!showRecipe)
    };

    
    const getBackClick = (e) => {
        setShowRecipe(!showRecipe)
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
        axios({
                url: showMore
            }).then( (apiData) => {
                setRecipes(apiData.data.hits)
                setShowRecipe(true)
                if (apiData.data._links.next.href){
                    setShowMore(apiData.data._links.next.href)
                } else {
                    setShowMore(null)
                }
            }).catch( (err) => {
                setError(true);
            })
    }

    const handleClickError = () => {
        setError(false)
    }

    return(
        <div className='apiCall'> 
            {
                error ? <ErrorMessage handleClick={ handleClickError }/>: null
            }
            <h2>Searched Recipes</h2>
            {   
                showRecipe 
                ? <div className="galleryContainer">
                    <ul className="galleryWall">
                        {
                            recipes.map( (recipe) => {
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
                    {
                    showMore ? <p className='more' onClick={ handleClick } >More</p> : null
                    }
                    {/* <p onClick={ handleClick }> {recipes ? 'more': ''}</p> */}
                </div>
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