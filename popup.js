function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

function httpGet(theUrl) {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (xmlhttp.response.getElementById("remainingValTotal")) { // && xmlhttp.response.getElementById("remainingValPeak") && xmlhttp.response.getElementById("remainingValOffPeak")) {
                var remainingTotal = "Remaining Total    \t" + xmlhttp.response.getElementById("remainingValTotal").innerHTML.trim();
                var remainingValPeak = "Remaining Peak     \t" + xmlhttp.response.getElementById("remainingValPeak").innerHTML.trim();
                var remainingValOffPeak = "Remaining OffPeak \t" + xmlhttp.response.getElementById("remainingValOffPeak").innerHTML.trim();
                renderStatus(remainingTotal + '\n' + remainingValPeak + '\n' + remainingValOffPeak);
            } else if (xmlhttp.response.getElementById("usageValUsedPeak")) { // && xmlhttp.response.getElementById("usageValTotalPeak") && xmlhttp.response.getElementById("usageValUsedOffPeak") && xmlhttp.response.getElementById("usageValTotalOffPeak") && xmlhttp.response.getElementById("usageValUsed") && xmlhttp.response.getElementById("usageValTotal")) {
                var usageValUsedPeak = xmlhttp.response.getElementById("usageValUsedPeak"); 
                var usageValTotalPeak = xmlhttp.response.getElementById("usageValTotalPeak");
                var usageValUsedOffPeak = xmlhttp.response.getElementById("usageValUsedOffPeak");
                var usageValTotalOffPeak = xmlhttp.response.getElementById("usageValTotalOffPeak");
                var usageValUsed = xmlhttp.response.getElementById("usageValUsed");
                var usageValTotal = xmlhttp.response.getElementById("usageValTotal");
                renderStatus("Total \t" +  usageValUsed + " / "+ usageValTotal + " \n " + "Peak \t" +  usageValUsedPeak + " / "+ usageValTotalPeak + " \n " +"OffPeak \t" +  usageValUsedPeak + " / "+ usageValTotalPeak);
            } else {
                renderStatus("Sorry");
            }
        }
    }
    xmlhttp.open("GET", theUrl, true);
    xmlhttp.responseType = "document";
    xmlhttp.send();
}

document.addEventListener('DOMContentLoaded', function() {
    httpGet("https://mypage.etisalat.lk/bbportal/home");
});