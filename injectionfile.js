let lastUrl = null;
let i = 0
const fetchPlayerResponse = () => {
    if (!window.location.pathname.startsWith('/watch')) return;

    const videoUrl = window.location.href;
    if (lastUrl !== videoUrl) {
        lastUrl = videoUrl; 
        i = 0; 
    } else {
        i++; 
    }

    if ( i >= 2 ) return;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", videoUrl, true);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const html = xhr.responseText;
            const jsonString = html.match(/ytInitialPlayerResponse\s*=\s*({.+?});/s);
            if (jsonString && jsonString[1]) {
                const playerResponse = JSON.parse(jsonString[1]);
                console.log('Player Response:', playerResponse);

                const adaptiveFormats = playerResponse.streamingData?.adaptiveFormats;
                if (adaptiveFormats && adaptiveFormats.length > 0) {
                    const maxQuality = adaptiveFormats
                        .filter(format => format.qualityLabel)
                        .reduce((prev, curr) => 
                            parseInt(curr.qualityLabel) > parseInt(prev.qualityLabel) ? curr : prev
                        );

                    console.log(`maxQuality: ${maxQuality.qualityLabel}`);

                    const qualityEvent = new CustomEvent('youtubeQuality', {
                        detail: { quality: maxQuality.qualityLabel }
                    });
                    window.dispatchEvent(qualityEvent);
                } else {
                    console.log('Adaptive formats not found.');
                }
            } else {
                console.log('ytInitialPlayerResponse not found.');
            }
        } else {
            console.error('Error fetching video page:', xhr.statusText);
        }
    };
    xhr.onerror = () => {
        console.error('Request failed');
    };
    xhr.send();
};

window.onload = fetchPlayerResponse;

setInterval(fetchPlayerResponse, 2000);
