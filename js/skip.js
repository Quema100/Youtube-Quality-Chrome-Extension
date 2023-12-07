let skip=()=>{
    if (window.location.pathname.startsWith('/watch')){
        const skipButton = document.querySelector('.ytp-ad-skip-button');
        if(skipButton != undefined){
            console.log("skip");
            skipButton.click();
        };
    };
    const skipButton = document.querySelector('.ytp-ad-skip-button-slot');
    if(skipButton != undefined){
        console.log("skip")
        skipButton.click();
    }
    const YesButton = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="Yes"]')
    if (YesButton){
        console.log("yes");
        YesButton.click();
        return YesButton = null
    };
    const YesButtonKO = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="예"]')
    if (YesButtonKO){
        console.log("yes");
        YesButtonKO.click();
        return YesButtonKO = null
    };

};

setInterval(skip,500);