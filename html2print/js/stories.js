;(function(undefined) {
    'use strict';

    // http://stackoverflow.com/questions/8567114/how-to-make-an-ajax-call-without-jquery
    function callAjax(url, callback){
        var xmlhttp;
        // compatible with IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        xmlhttp.withCredentials = true;
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                callback(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    // loads stories
    var stories = document.querySelectorAll('article[data-src]');

    for (var i = 0, l = stories.length; i < l; i ++) {
        (function () {
          var story = stories[i];
          var src = story.dataset.src;

          callAjax(src, function(data) {
              story.innerHTML = data;
          });
        })();
    }
})();

// ;(function(undefined) {
//     if (! Modernizr.regions) {
//         console.log('no support for css regions; loading the polyfill');
//         var script = document.createElement('script');
//         //script.setAttribute('src', '../../vendors/css-regions-polyfill/bin/css-regions-polyfill.js');
//         script.setAttribute('src', '/assets/lib/css-regions.min.js');
//         document.getElementsByTagName('head')[0].appendChild(script);
//     };
// })();
