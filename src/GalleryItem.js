//GalleryItem.js
import { useState } from "react"


export default function GalleryItem(props) {
    // console.log(props);
    const [showDetail, setShowDetail] = useState(false);
    console.log('showDetail  ', showDetail);

    function handleClick(e) {
        // setShowDetail(!showDetail);
        props.handleButton(e);
    };

    return(
        <li className="galleryLi">
            <button onClick={ handleClick }>
                <img src={props.imgSource} alt="FOOD" />
                <h3>{props.title}</h3>
                <p>{props.cuisineType}</p>
            </button>
        </li>
    )
};