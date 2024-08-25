let skip=()=>{

    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        const video = document.getElementsByTagName('video')[i];
        const adText = document.querySelector('.ytp-ad-text');
        if (adText && Number.isFinite(video.duration)) {
            video.currentTime = video.duration;
            console.log("Ad skipped");
        } else {
            console.log("No ad found or invalid video duration.");
        }
    }

    const adblockwarningEn = document.querySelector('button-view-model > button[aria-label="Close"]')
    if (adblockwarningEn != null || adblockwarningEn != undefined){
        adblockwarningEn.click();
        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            document.getElementsByTagName("video")[i].play()
        }  
        setTimeout(()=>{        
            adblockwarningEn.remove();
            console.log("rm warning")
        },5000)
    }

    const adblockwarning = document.querySelector('button-view-model > button[aria-label="닫기"]')
    if (adblockwarning != null || adblockwarning != undefined){
        adblockwarning.click();
        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            document.getElementsByTagName("video")[i].play()
        }  
        setTimeout(()=>{        
            adblockwarning.remove();
            console.log("rm warning")
        },5000)
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
        YesButton.remove();
        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            document.getElementsByTagName("video")[i].play()
        }  
    };
    
    const YesButtonKO = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="예"]')
    if (YesButtonKO != undefined){
        console.log("yes");
        YesButtonKO.click();
        YesButtonKO.remove();
        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            document.getElementsByTagName("video")[i].play()
        }  
    };

};

setInterval(skip,500);