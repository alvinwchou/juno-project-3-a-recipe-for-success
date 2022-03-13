//GalleryItem.js
import { useState } from "react"


export default function GalleryItem(props) {
    // console.log(props);
    // const [showDetail, setShowDetail] = useState(false);
    // console.log('showDetail  ', showDetail);

    // function handleClick(e) {
    //     // setShowDetail(!showDetail);
    //     props.handleButton(e);
    // };

    return(
        <li className="galleryLi">
            <button id={props.id} onClick={ (e) => props.handleButton(e) }>
                <img src={props.imgSource} alt="FOOD" />
                <p>{props.title}</p>
                {/* <p>{props.cuisineType}</p> */}
            </button>
        </li>
    )
};