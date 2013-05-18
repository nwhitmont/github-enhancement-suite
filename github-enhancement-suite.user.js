// ==UserScript==
// @name           GitHub Enhancement Suite
// @namespace      https://github.com/skratchdot/github-enhancement-suite
// @description    A collection of userscripts to add functionality when browsing github.com
// @include        https://github.com/*
// @match          https://github.com/*
// @run-at         document-end
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-enhancement-suite/raw/master/enhancement-suite.user.js
// @updateURL      https://github.com/skratchdot/github-enhancement-suite/raw/master/enhancement-suite.user.js
// @version        1.0
// ==/UserScript==

var addScript = function (src) {
	var script = document.createElement('script');
	script.src = src;
	document.body.appendChild(script);
	document.body.removeChild(script);
};

// Required by: repo-filter-info
addScript('https://gist.github.com/skratchdot/5604120/raw/d3.ay-pie-chart.js');

// Github Userscripts
addScript('https://gist.github.com/skratchdot/5604120/raw/code-search.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/editor-theme.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/fork-count.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/get-missing-descriptions.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/gh-pages-link.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/pull-request-links.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/repo-counts.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/repo-filter-info.js');
addScript('https://gist.github.com/skratchdot/5604120/raw/twitter-link.js');