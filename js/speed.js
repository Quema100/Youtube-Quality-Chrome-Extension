let infintiy = null

let speed = ()=>{
    const port = chrome.runtime.connect({name: "video-speed"});
    if(document.getElementsByTagName("video").length <= 0)return
    console.log(document.getElementsByTagName("video")[0].playbackRate)
    port.postMessage({speed:`${document.getElementsByTagName("video")[0].playbackRate}`});
    port.onMessage.addListener((msg)=> {
        if (infintiy === null){
            if (parseFloat(msg.value) || parseInt(msg.value) ){
                document.getElementsByTagName("video")[0].playbackRate = parseFloat(msg.value.toFixed(1));
                port.postMessage({speed:`${document.getElementsByTagName("video")[0].playbackRate}`});
            }
        }


        if (parseFloat(msg.Infintiy_value) || parseInt(msg.Infintiy_value)) {
            if (infintiy) {
                clearInterval(infintiy);
                infintiy = null
            }
        
            infintiy = setInterval(() => {
                document.getElementsByTagName("video")[0].playbackRate = parseFloat(msg.Infintiy_value.toFixed(1));
                port.postMessage({ speed: `${document.getElementsByTagName("video")[0].playbackRate}` });
            }, 1000);
        }
        
        if (msg.stop_Infintiy === "stop") {
            clearInterval(infintiy);
            infintiy = null
        }       
    });
}

window.onload=speed;

setInterval(speed,1000)