



function changeit(url){
  aa.src=url;
}
function changeimage(url)
{
	document.getElementById("iframepage").src = "imge.html"
}

function changeabout(url)
{
	document.getElementById("iframepage").src = "about.html"
}

function iFrameHeight() { 
	var ifm= document.getElementById("iframepage"); 
	var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument; 
	if(ifm != null && subWeb != null) { 
	ifm.height = subWeb.body.scrollHeight; 
	} 
} 
