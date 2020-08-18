/*chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true } }, {
        urls: [
            "*://*.doubleclick.net/*",
            "*://partner.googleadservices.com/*",
            "*://*.googlesyndication.com/*",
            "*://*.google-analytics.com/*",
            "*://creative.ak.fbcdn.net/*",
            "*://*.adbrite.com/*",
            "*://*.exponential.com/*",
            "*://*.quantserve.com/*",
            "*://*.scorecardresearch.com/*",
            "*://*.zedo.com/*",
            "*://*.adsense.com/*",
            "*://*.adblade.com/*",
            "*://*.207.net/*",
            "*://*.247realmedia.com/*",
            "*://*.2mdn.net/*",
            "*://*.2o7.net/*",
            "*://*.33across.com/*",
            "*://*.abmr.net/*",
            "*://*.adbrite.com/*",
            "*://*.adbureau.net/*",
            "*://*.adchemy.com/*",
            "*://*.addthis.com/*",
            "*://*.addthisedge.com/*",
            "*://*.admeld.com/*",
            "*://*.admob.com/*",
            "*://*.adsonar.com/*",
            "*://*.advertising.com/*",
            "*://*.afy11.net/*",
            "*://*.aquantive.com/*",
            "*://*.atdmt.com/*",
            "*://*.atwola.com/*",
            "*://*.channelintelligence.com/*",
            "*://*.cmcore.com/*",
            "*://*.coremetrics.com/*",
            "*://*.crowdscience.com/*",
            "*://*.decdna.net/*",
            "*://*.decideinteractive.com/*",
            "*://*.doubleclick.com/*",
            "*://*.esomniture.com/*",
            "*://*.fimserve.com/*",
            "*://*.flingwebads.com/*",
            "*://*.foxnetworks.com/*",
            "*://*.googleadservices.com/*",
            "*://*.googlesyndication.com/*",
            "*://*.google-analytics.com/*",
            "*://*.gravity.com/*",
            "*://*.hitbox.com/*",
            "*://*.imiclk.com/*",
            "*://*.imrworldwide.com/*",
            "*://*.insightexpress.com/*",
            "*://*.insightexpressai.com/*",
            "*://*.intellitxt.com/*",
            "*://*.invitemedia.com/*",
            "*://*.leadback.com/*",
            "*://*.lindwd.net/*",
            "*://*.mookie1.com/*",
            "*://*.myads.com/*",
            "*://*.netconversions.com/*",
            "*://*.nexac.com/*",
            "*://*.nextaction.net/*",
            "*://*.nielsen-online.com/*",
            "*://*.offermatica.com/*",
            "*://*.omniture.com/*",
            "*://*.omtrdc.net/*",
            "*://*.pm14.com/*",
            "*://*.quantcast.com/*",
            "*://*.quantserve.com/*",
            "*://*.realmedia.com/*",
            "*://*.revsci.net/*",
            "*://*.rightmedia.com/*",
            "*://*.rmxads.com/*",
            "*://*.ru4.com/*",
            "*://*.rubiconproject.com/*",
            "*://*.samsungadhub.com/*",
            "*://*.scorecardresearch.com/*",
            "*://*.sharethis.com/*",
            "*://*.shopthetv.com/*",
            "*://*.acoda.net/*",
            "*://*.targetingmarketplace.com/*",
            "*://*.themig.com/*",
            "*://*.trendnetcloud.com/*",
            "*://*.yieldmanager.com/*",
            "*://*.yieldmanager.net/*",
            "*://*.yldmgrimg.net/*",
            "*://*.youknowbest.com/*",
            "*://*.yumenetworks.com/*",
            "*://gotohouse1.club/*",
            "*://inpcut.com/*",
            "*://app2.mackeeperaffiliates.com/*",
            "*://static.olymptrade.com/*",
            "*://d2suvptmw5zl4o.cloudfront.net/*",
            "*://stressfulpyjamas.com/*",
            "*://india-contests.com/*",
            "*://xml.realtime-bid.com/*",
            "*://vexavion.com/*",
            "*://suftoajachi.com/*"

        ]
    }, ["blocking"]
)

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.cmd === "setOnOffState") {
            isExtensionOn = request.data.value;
        }

        if (request.cmd === "getOnOffState") {
            sendResponse(isExtensionOn);
        }
    });*/

var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (enabled) {
            console.log("blocking:", details.url);
        }
        return { cancel: enabled };
    }, { urls: blocked_domains },
    //{urls: ["<all_urls>"]}, /* replace with list of blacklisted urls */
    ["blocking"]
);