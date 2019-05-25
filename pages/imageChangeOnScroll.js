import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            <ImageToggleOnScroll primaryImg="https://wallpapersite.com/images/pages/pic_h/6099.jpg"
                secondaryImg="https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_horizon_zero_dawn_-_the_frozen_wilds_01_1920x1080.jpg"
                alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnScroll primaryImg="https://wallpaperaccess.com/full/88408.jpg"
                secondaryImg="https://images3.alphacoders.com/854/thumb-1920-854485.jpg"
                alt="" />
        </div>
    )
}

export default ImageChangeOnScroll;