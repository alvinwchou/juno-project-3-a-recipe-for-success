// ErrorMessage.js

export default function ErrorMessage(props) {
    return(
        <div className="errorMessage" onClick={ () => props.handleClick() }>
            <div className="mesageContainer">
                <div className="textContainer">
                    <h2>Ooops...</h2>
                    <p>Sorry, there was a problem with our search, please try again.</p>
                </div>
            </div>
        </div>
    )
}