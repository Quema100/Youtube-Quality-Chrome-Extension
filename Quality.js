let Youtube = () => {
    if (window.location.pathname.startsWith('/watch')){
        const spanElements = document.querySelector('div[class="ytp-menuitem-content"] > div > span')
        if(spanElements !== null && spanElements.textContent !== '자동'){
            if (spanElements.textContent.includes('2160p')) {
                console.log("2160p fin");
                return;
            } else if (spanElements.textContent.includes('1440p')) {
                console.log("1440p  fin");
                return;
            } else if (spanElements.textContent.trim() === "1080p60 HD" ) {
                console.log("1080p fin");
                return;
            } else if (spanElements.textContent.trim() === '1080p50 HD') {
                console.log("1080p fin");
                return;
            } else if (spanElements.textContent.trim() === "1080p HD") {
                console.log("1080p fin");
                return;
            };
        }else if (spanElements !== null && spanElements.textContent !== 'Auto' ){
            if (spanElements.textContent.includes('2160p')) {
                console.log("2160p fin");
                return;
            } else if (spanElements.textContent.includes('1440p')) {
                console.log("1440p  fin");
                return;
            } else if (spanElements.textContent.trim() === "1080p60 HD" ) {
                console.log("1080p fin");
                return;
            } else if (spanElements.textContent.trim() === '1080p50 HD') {
                console.log("1080p fin");
                return;
            } else if (spanElements.textContent.trim() === "1080p HD") {
                console.log("1080p fin");
                return;
            };
        };

        const topelement = document.querySelector('div[class="ytp-chrome-controls"] > div[class="ytp-right-controls"] > button[aria-label="Settings"]');
        const topelementKo = document.querySelector('div[class="ytp-chrome-controls"] > div[class="ytp-right-controls"] > button[aria-label="설정"]');
        if(topelement){
            topelement.click();
            const anotherelement = document.querySelector('div[class="ytp-menuitem-content"] > div > span');
            const secondelement = document.querySelector('span[class="ytp-menu-label-secondary"]');
            if(secondelement){
                secondelement.click();
                const spanElements = document.querySelectorAll('div[class="ytp-menuitem-label"] > div > span');
                for (const spanElement of spanElements) {
                    if (spanElement.textContent.includes('2160p')) {
                        spanElement.click();
                        break;
                    } else if (spanElement.textContent.includes('1440p')) {
                        spanElement.click();
                        break; 
                    } else if (spanElement.textContent.trim() === "1080p60 HD") {
                        spanElement.click();
                        break;
                    }else if(spanElement.textContent.trim() === '1080p50 HD'){
                        spanElement.click();
                        break; 
                    } else if(spanElement.textContent.trim() === "1080p HD"){
                        spanElement.click();
                        break; 
                    } else if (spanElement.textContent.includes('Auto')) {
                        console.log('auto');
                        spanElement.click();
                        break; 
                    }; 
                };
            }else if(anotherelement){
                anotherelement.click()
                const spanTag = document.querySelectorAll('div[class="ytp-menuitem-label"] > div > span')
                for (const span of spanTag) {
                    if (span.textContent.includes('2160p')) {
                        span.click();
                        break; 
                    } else if (span.textContent.includes('1440p')) {
                        span.click();
                        break; 
                    } else if (span.textContent.trim() === "1080p60 HD" ) {
                        span.click();
                        break; 
                    }else if(span.textContent.trim() === '1080p50 HD'){
                        span.click();
                        break;
                    }else if(span.textContent.trim() === "1080p HD"){
                        span.click();
                        break;
                    } else if (span.textContent.includes('Auto')) {
                        console.log('auto');
                        span.click();
                        break; 
                    } ;
                };
            };

        }else if(topelementKo){
            topelementKo.click()
            const anotherelement = document.querySelector('div[class="ytp-menuitem-content"] > div > span')
            const secondelement = document.querySelector('span[class="ytp-menu-label-secondary"]')
            if(secondelement){
                secondelement.click()
                const spanElements = document.querySelectorAll('div[class="ytp-menuitem-label"] > div > span')
                for (const spanElement of spanElements) {
                    if (spanElement.textContent.includes('2160p')) {
                        spanElement.click();
                        break; 
                    } else if (spanElement.textContent.includes('1440p')) {
                        spanElement.click();
                        break; 
                    } else if (spanElement.textContent.trim() === "1080p60 HD") {
                        spanElement.click();
                        break; 
                    }else if(spanElement.textContent.trim() === '1080p50 HD'){
                        spanElement.click();
                        break; 
                    } else if(spanElement.textContent.trim() === "1080p HD"){
                        spanElement.click();
                        break; 
                    } else if (spanElement.textContent.includes('자동')) {
                        console.log('auto');
                        spanElement.click();
                        break; 
                    };
                };
            }else if(anotherelement){
                anotherelement.click()
                const spanTag = document.querySelectorAll('div[class="ytp-menuitem-label"] > div > span')
                for (const span of spanTag) {
                    if (span.textContent.includes('2160p')) {
                        span.click();
                        break; 
                    } else if (span.textContent.includes('1440p')) {
                        span.click();
                        break; 
                    } else if (span.textContent.trim() === "1080p60 HD" ) {
                        span.click();
                        break;
                    }else if(span.textContent.trim() === '1080p50 HD'){
                        span.click();
                        break;
                    }else if(span.textContent.trim() === "1080p HD"){
                        span.click();
                        break; 
                    } else if (span.textContent.includes('자동')) {
                        console.log('auto');
                        span.click();
                        break; 
                    };
                };
            };

        };
    };
};

window.onload = Youtube;

setInterval(Youtube,2000);