// ==UserScript==
// @namespace     http://xkcd.org/
// @name          xkcd titles
// @author				riddle and patrickmj
// @include       http://*xkcd.tld/*
// ==/UserScript==

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	alert(parent.id);
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

var comic = document.getElementById("comic");
if (comic) {
	var img = comic.getElementsByTagName("img")[0];
	if (img && img.title) {
		var desc = document.createElement("div");
		desc.appendChild(document.createTextNode(img.title));
		img.title = null;
		insertAfter(desc, img);
	}
}