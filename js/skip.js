let skip=()=>{
    
    const adText = document.querySelector('.ytp-ad-player-overlay-layout');
    if (adText) {
        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            const video = document.getElementsByTagName('video')[i];
            if ( Number.isFinite(video.duration) ){
                video.currentTime = video.duration - 1; // Some AD may require a bit of time.
                console.log("Ad skipped");
            }
        }
    }

    const adblockpopup =  document.querySelector('ytd-enforcement-message-view-model')?.parentElement;

    const adblockwarningEn = document.querySelector('button-view-model > button[aria-label="Close"]')

    const adblockwarning = document.querySelector('button-view-model > button[aria-label="닫기"]')


    if (adblockpopup && window.getComputedStyle(adblockpopup).display !== 'none') {

        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            document.getElementsByTagName("video")[i].play()
        }  

        if (adblockwarningEn != null || adblockwarningEn != undefined){
            adblockwarningEn.click();
        }

        if (adblockwarning != null || adblockwarning != undefined){
            adblockwarning.click();
        }
    }

    const warningButton = document.querySelector('button[aria-label="절차를 이해했으며 계속 진행하기 원합니다."]');
    const warningButtonEn = document.querySelector('button[aria-label="I understand and wish to proceed"]');

    warningButton || warningButtonEn ? 
    (
        console.log("skip"), 
        (warningButton || warningButtonEn).click()
    ) 
    : null;

    const YesButton = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="Yes"]')   
    const YesButtonKO = document.querySelector('yt-button-renderer[id="confirm-button"] > yt-button-shape > button[aria-label="예"]')

    YesButton || YesButtonKO ? 
    (
        console.log("yes"), 
        (YesButton || YesButtonKO).click(), 
        (YesButton || YesButtonKO).remove(),
        document.querySelectorAll("video").forEach(video => video.play())
    ) 
    : null;


};

window.onload = skip

setInterval(()=>skip(),1000);