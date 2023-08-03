let Youtube = () => {
    if (window.location.pathname.startsWith('/watch')){
        const spanElements = document.getElementsByTagName("span")
        for (const spanElement of spanElements) {
            if (spanElement.textContent.includes('2160p')) {
                console.log("2160p fin");
                return;
            } else if (spanElement.textContent.includes('1440p')) {
                console.log("1440p  fin");
                return;
            } else if (spanElement.textContent.includes('1080p')) {
                console.log("1080p fin");
                return;
            } else if(spanElement.textContent.includes('1080p Premium')){
                console.log("1080p Premium fin");
                return;
            }
        }      
        const topelement = document.querySelector('button[aria-label="Settings"]')
        const topelementKo = document.querySelector('button[aria-label="설정"]')
        if(topelement){
            topelement.click()
            const anotherelement = document.querySelector('div[class="ytp-menuitem-content"] > div > span')
            const secondelement = document.querySelector('span[class="ytp-menu-label-secondary"]')
            if(secondelement){
                secondelement.click()
                const spanElements = document.getElementsByTagName("span")
                for (const spanElement of spanElements) {
                    if (spanElement.textContent.includes('2160p')) {
                        spanElement.click();
                        console.log("2160p");
                        break; // 2160p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (spanElement.textContent.includes('1440p')) {
                        spanElement.click();
                        console.log("1440p");
                        break; // 2160p를 찾지 못한 경우 1440p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (spanElement.textContent.includes('1080p')) {
                        spanElement.click();
                        console.log("1080p");
                        break; // 2160p와 1440p를 찾지 못한 경우 1080p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (spanElement.textContent.includes('1080p Premium')) {
                        spanElement.click();
                        console.log("1080p Premium");
                        break; // 2160p와 1440p, 1080p를 찾지 못한 경우 1080p Premium를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다
                    } 
                }
            }else if(anotherelement){
                anotherelement.click()
                console.log("다른 성공 2")
                const spanTag = document.getElementsByTagName("span")
                console.log()
                for (const span of spanTag) {
                    if (span.textContent.includes('2160p')) {
                        span.click();
                        console.log("2160p");
                       break; // 2160p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (span.textContent.includes('1440p')) {
                        span.click();
                        console.log("1440p");
                        break; // 2160p를 찾지 못한 경우 1440p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (span.textContent.includes('1080p')) {
                        span.click();
                        console.log("1080p");
                        break; // 2160p와 1440p를 찾지 못한 경우 1080p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (span.textContent.includes('1080p Premium')) {
                        span.click();
                        console.log("1080p Premium");
                        break; // 2160p와 1440p, 1080p를 찾지 못한 경우 1080p Premium를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다
                    }
                }
            }

        }else if(topelementKo){
            topelementKo.click()
            const anotherelement = document.querySelector('div[class="ytp-menuitem-content"] > div > span')
            const secondelement = document.querySelector('span[class="ytp-menu-label-secondary"]')
            if(secondelement){
                secondelement.click()
                const spanElements = document.getElementsByTagName("span")
                for (const spanElement of spanElements) {
                    if (spanElement.textContent.includes('2160p')) {
                        spanElement.click();
                        break; // 2160p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (spanElement.textContent.includes('1440p')) {
                        spanElement.click();
                        break; // 2160p를 찾지 못한 경우 1440p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (spanElement.textContent.includes('1080p')) {
                        spanElement.click();
                        break; // 2160p와 1440p를 찾지 못한 경우 1080p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (spanElement.textContent.includes('1080p Premium')) {
                        spanElement.click();
                        break; // 2160p와 1440p, 1080p를 찾지 못한 경우 1080p Premium를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다
                    } 
                }
            }else if(anotherelement){
                anotherelement.click()
                const spanTag = document.getElementsByTagName("span")
                for (const span of spanTag) {
                    if (span.textContent.includes('2160p')) {
                        span.click();
                        break; // 2160p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (span.textContent.includes('1440p')) {
                        span.click();
                        break; // 2160p를 찾지 못한 경우 1440p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (span.textContent.includes('1080p')) {
                        span.click();
                        break; // 2160p와 1440p를 찾지 못한 경우 1080p를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다.
                    } else if (span.textContent.includes('1080p Premium')) {
                        span.click();
                        break; // 2160p와 1440p, 1080p를 찾지 못한 경우 1080p Premium를 찾았으면 더 이상 탐색하지 않고 반복문을 종료합니다
                    } 
                }
            }

        }
    }
}
window.onload = Youtube
let skip=()=>{
    if (window.location.pathname.startsWith('/watch')){
        const skipButton = document.querySelector('.ytp-ad-skip-button');
        if(skipButton != undefined){
            console.log("skip")
            skipButton.click();
        }
    }
};

setInterval(Youtube,1000)
setInterval(skip,500)