const fetchPlayerResponse = () => {
    if (!window.location.pathname.startsWith('/watch')) return;

    const scripts = document.querySelectorAll('script');
    let playerResponseString = null;

    scripts.forEach(script => {
        const match = script.innerHTML.match(/ytInitialPlayerResponse\s*=\s*({.+?});/s);
        if (match && match[1]) {
            playerResponseString = match[1];
        }
    });

    if (playerResponseString) {
        const playerResponse = JSON.parse(playerResponseString);
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
};

window.onload = fetchPlayerResponse;

setInterval(fetchPlayerResponse, 4000);