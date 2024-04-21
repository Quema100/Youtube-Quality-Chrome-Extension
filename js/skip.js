let skip=()=>{

    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if(skipButton != undefined){
        console.log("skip")
        skipButton.click();
    }

    const warningButton = document.querySelector('button[aria-label="절차를 이해했으며 계속 진행하기 원합니다."]');
    if(warningButton != undefined){
        console.log("skip")
        warningButton.click();
    }

    const warningButtonEn = document.querySelector('button[aria-label="I understand and wish to proceed"]');
    if(warningButtonEn != undefined){
        console.log("skip")
        warningButtonEn.click();
    }

    const YesButton = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="Yes"]')
    if (YesButton !== null){
        console.log("yes");
        YesButton.click();
        return YesButton = null
    };
    const YesButtonKO = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="예"]')
    if (YesButtonKO !== null){
        console.log("yes");
        YesButtonKO.click();
        return YesButtonKO = null
    };

};

setInterval(skip,500);