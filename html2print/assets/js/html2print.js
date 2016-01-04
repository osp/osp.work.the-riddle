;(function(jQuery, $){
    // ________________________________ INIT __________________________________ //
    // Calculating the number of pages needed
    var content_height = $("#main").height();
    //var content_height = $("body").height();
    var body_height = $($("#master-page .body")[0]).height();
    var nb_page = 9; // Math.ceil(content_height / body_height) + 6;
    console.log(content_height);
    console.log(body_height);
    console.log(nb_page);

    $master = $("#master-page");
    $container = $master.parent();
    $master.detach();

    //Cloning the master page
    for (i = 1; i <= nb_page; i++){
       $page = $master.clone().attr("id","page-"+i);
       $container.append($page);
    }

    // $("#master-page").attr("data-width", $(".paper:first-child").width()).hide();
    // $("#master-page .recipient").removeClass("recipient");
    // $("body").css("width", "100%");
    // $("html").css("width", "100%");


    //window.setTimeout(function(){
    //    // REMOVE EMPTY PAGES
    //    $("cssregion").each(function(){
    //        console.log($(this));
    //        if(this.textContent == ""){
    //            console.log($(this).parent().parent().parent());
    //            $(this).parent().parent().parent().hide();
    //        }
    //    });
    //}, 4000);
    // document.getNamedFlow('myStory').addEventListener('regionfragmentchange', function(event) {
    //    console.log('regionFragmentChange');
    //});
})(jQuery, $);

//;(function(undefined) {
//    if (! Modernizr.regions) {
//        console.log('no support for css regions; loading the polyfill');
//        var script = document.createElement('script');
//        script.setAttribute('src', 'http://diplomes2015.villa-arson.org/wp-content/themes/diplomes2015/stdin/css-regions-polyfill.js');
//        document.getElementsByTagName('head')[0].appendChild(script);
//    };
//})();
