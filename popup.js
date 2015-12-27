function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var remainingTotal  =      "Remaining Total    \t"+ xmlhttp.response.getElementById("remainingValTotal").innerHTML.trim();
            var remainingValPeak  =    "Remaining Peak     \t"+ xmlhttp.response.getElementById("remainingValPeak").innerHTML.trim();
            var remainingValOffPeak  = "Remaining OffPeak \t"+ xmlhttp.response.getElementById("remainingValOffPeak").innerHTML.trim();

            renderStatus(remainingTotal+'\n'+remainingValPeak+'\n'+remainingValOffPeak);
        }
    }
    xmlhttp.open("GET", theUrl, true );
    xmlhttp.responseType = "document";
    xmlhttp.send();    
}

document.addEventListener('DOMContentLoaded', function() {
  httpGet("https://mypage.etisalat.lk/bbportal/home");
  });
