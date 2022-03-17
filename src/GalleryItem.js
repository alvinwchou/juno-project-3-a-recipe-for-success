//GalleryItem.js

export default function GalleryItem(props) {
    return(
        <li className="galleryLi">
            <button id={props.id} onClick={ (e) => props.handleButton(e, props.remove) }>
                <img src={props.imgSource} alt={`A picture of ${props.title}`} />
                <p>{props.title}</p>
                {/* <p>{props.cuisineType}</p> */}
            </button>
        </li>
    )
};