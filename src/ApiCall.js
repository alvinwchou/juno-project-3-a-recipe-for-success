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

    const [position, setPosition] = useState({startingPoints: {top: 0, bottom: 0, left: 0, right: 0}});
    console.log(position)   ;



        // inital styling for recipe popup
        const [showRecipe, setShowRecipe] = useState({
        // position: 'fixed', 
        // top: '0',
        // height: '0',
        // left: '0',
        // width: '0',
        // // maxWidth:'500px',
        // overflow: 'hidden',
        // backgroundColor: "rgba(170, 238, 196, 0.692)",
        // zIndex: '-1',
        display: 'none'
    })
    console.log(showRecipe)

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
            }).catch( (err) => {
                console.log(err);
            })
        }, 100)
    }, [props]);

    const [display, setDisplay] = useState(null);
    const { height, width } = useWindowDimensions();
    console.log(height);

    const getDisplay = (e) => {
        // setDisplay(!display)
        console.log('APICALL DISPLAY???? ', display);
        console.log(e);
        console.log(e.target.parentElement.childNodes[1].innerText);
        setDisplay(e.target.parentElement.childNodes[1].innerText)
        console.log(e.target.parentElement)
        console.log(e.target.parentElement.getBoundingClientRect())
        const rect = e.target.parentElement.getBoundingClientRect()
        console.log(rect);
        // setPosition({rect})
        // console.log(position);
        // console.log(position.startingPoints);
        // console.log(position.startingPoints.top);
        // setPosition( {startingPoints: {top: rect.top, bottom: height - rect.bottom, left: rect.left, right: width - rect.right}} )
        console.log(showRecipe.top)
        setShowRecipe( { ...showRecipe, top: `${rect.top}px` } )
        // setShowRecipe( { ...showRecipe, bottom: `${height}px` - `${rect.bottom}px` } )
        console.log(showRecipe)
        // setShowRecipe( { ...showRecipe, left: `${rect.left}px` } )
        // setShowRecipe( { ...showRecipe, right: `${width}px` - `${rect.right}px` } )
        console.log(showRecipe)
        // console.log(position.startingPoints.top);


        setShowRecipeBg(!showRecipeBg)

        setShowRecipe({
            position: 'fixed', 
            top: `${rect.top}px`,
            height: `${e.target.parentElement.clientHeight}px`,
            left: `${rect.left}px`,
            width: `${e.target.parentElement.clientWidth}px`,
            // width: '33vw',
            overflow: 'hidden',
            overflowy: 'auto',
            // backgroundColor: "rgba(170, 238, 196, 0.692)",
            zIndex: '-1',
            opacity: 0,
            
        })

        setTimeout(() => {
            setShowRecipe({
                position: 'fixed', 
                width: '80vw',
                height: '80vh',
                top: '10%',
                // bottom: '10%',
                left: '10%',
                // right: '10%',

                // height: '100px',
                // width: `${e.target.parentElement.clientWidth}px`,
                // width: '10vw',
                overflow: 'hidden',
                // backgroundColor: "rgba(170, 238, 196, 0.692)",
                zIndex: '10',
                opacity: '1',
                transition: 'all 0.6s linear',
                overflowY: 'auto',
            })
        }, 100);
    };




    
console.log(document.querySelector('h1'));

    const startingPosition = {
        // position:'fixed',
        // top: `${position.rect.top}px`, 
        // bottom: `${position.rect.bottom}px`, 
        // left: `${position.rect.left}px`, 
        // right: `${position.rect.right}px`, 
        
        // top: '130.2px',
        // bottom: '50px',
        // maxWidth:'500px',
        overflow: 'hidden',
        transition: 'all 1s linear'
    };
    
    const handleClick = (e) => {
        console.log('clicked', e.target);
        if (e.target.offsetParent.localName === 'body') {
            console.log('body');
            setShowRecipe({ display: 'none' })
            setShowRecipeBg(!showRecipeBg)
            console.log(showRecipeBg);
        }
    };

    return(
        <div className='apiCall'>
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
            
            {/* this is to catch clicks outside of the recipe popup  */}
            <div className={`recipeBackground ${showRecipeBg}`} onClick={ handleClick }></div>

            {/* this is the recipe popup */}
            <div style={ showRecipe } onClick={ handleClick }>
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
                                cuisine={recipe.recipe.cuisineType}
                                meal={recipe.recipe.mealType}
                                dish={recipe.recipe.dishType}
                            />
                            : null
                        )
                    })
                }
            </div>
        </div>
    )
};