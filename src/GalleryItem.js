//GalleryItem.js
import { useState } from "react"


export default function GalleryItem(props) {
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