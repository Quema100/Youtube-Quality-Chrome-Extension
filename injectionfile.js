const fetchPlayerResponse = async () => {
    if (!window.location.pathname.startsWith('/watch')) return;
    const videoUrl = window.location.href; 
    try {
        const response = await fetch(videoUrl);
        const html = await response.text();

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
    } catch (error) {
        console.log('Error fetching player response:', error);
    }
};

window.onload = fetchPlayerResponse

setInterval(fetchPlayerResponse, 4000);