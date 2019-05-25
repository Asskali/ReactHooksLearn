import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/zack-fair-mcashe.jpg"
                secondaryImg="https://i.pinimg.com/originals/db/fc/b1/dbfcb1a16a9a5dc6e8546da41de5684b.jpg"
                alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="https://i.pinimg.com/originals/db/fc/b1/dbfcb1a16a9a5dc6e8546da41de5684b.jpg"
                secondaryImg="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/zack-fair-mcashe.jpg"
                alt="" />
        </div>
    )
}

export default ImageChangeOnMouseOver;