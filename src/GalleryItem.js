//GalleryItem.js

export default function GalleryItem(props) {
    console.log(props);
    return(
        <li>
            <img src={props.imgSource} alt="FOOD" />
        </li>
    )
};