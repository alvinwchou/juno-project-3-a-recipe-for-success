// ApiCall.js
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ApiCall() {
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        axios({
            url: 'https://api.edamam.com/api/recipes/v2',
            params: {
            app_id: '12a553b5',
            app_key: '6243134e8b4229cae7ecfea70b2a1bb1',
            type: 'public',
            q: 'chicke'
            },
        }).then( (apiData) => {
            console.log(apiData);
            setRecipes(apiData.data.hits)
        })
    }, []);
    return(
        <h1>Header</h1>
    )
}