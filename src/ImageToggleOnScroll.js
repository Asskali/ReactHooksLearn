import React, { useState, useRef, useEffect } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView);

        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    }, [isLoading])

    const [inView, setInView] = useState(false);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    }
    
    return isLoading ? true : (
        <img src={inView ? secondaryImg : primaryImg}
            alt="" ref={imageRef} width="1920" height="1080"/>
    )
}

export default ImageToggleOnMouseOver;