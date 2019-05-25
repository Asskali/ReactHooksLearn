import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);

    return (
        <img src={primaryImg} alt="" ref={imageRef}
            onMouseOver={(e) => {
                imageRef.current.src = secondaryImg;
            }} 
            onMouseOut={(e) => {
                imageRef.current.src = primaryImg;
            }}/>
    )
}

export default ImageToggleOnMouseOver;