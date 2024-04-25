let skip=()=>{

    const skipButton1 = document.querySelector('.ytp-skip-ad-button');
    if(skipButton1 != null){
        console.log("skip")
        skipButton1.click();
    }

    const skipButton2 = document.querySelector('.ytp-ad-skip-button-container');
    if(skipButton2 != undefined){
        console.log("skip")
        skipButton2.click();
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
    if (YesButton != undefined){
        console.log("yes");
        YesButton.click();
    };
    const YesButtonKO = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="예"]')
    if (YesButtonKO != undefined){
        console.log("yes");
        YesButtonKO.click();
    };

};

setInterval(skip,500);