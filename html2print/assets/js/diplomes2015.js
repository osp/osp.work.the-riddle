page_structure = '<div id="pages">\
        <div id="master-page" class="paper">\
            <div class="h2p-page">\
                <section class="header"> </section>\
                <section class="body recipient"> \
                </section>\
                <section class="footer"> </section>\
            </div>\
        </div>\
    </div>';

jQuery(document).ready(function($){

    $("body").wrapInner("<div id='main'></div>");
    $("#main").append("<div id='colophon'>Design graphique par <a href='http://osp.kitchen' target='_blank'>OSP</a> —  Édité depuis le site des <a href='http://diplomes2015.villa-arson.org/' target='_blank'>diplômés 2015 – Villa Arson Nice</a></div>");

    // INSERTING THE PAGES STRUCTURE
    $("body").prepend(page_structure).ready(function(){});

    //REMOVE ALL INLINE STYLES
    $("#avada-stylesheet-inline-css").remove();
    $("*").attr("style", "");

    // PUTS ARTIST NAME INTO HEADER
    $(".header").html($("h1:first-child").text() + "<span class='mentiondiplomes'>, " + $(".mentiondiplomes").text() +"&nbsp;</span>");

    // REPLACES IFRAMES WITH THEIR SOURCES (ESPECIALLY FOR SOUNDCLOUD)
    $("iframe").each(function(){
        $("<p>&searr;<br/>" + $(this).attr('src') + "</p>").insertBefore($(this));
    });

    caption = "";
    $("img").each(function(){

        // Removes useless <i> around <img>
        if($($(this).parent()).is("i")){
            $(this).unwrap("<i></i>");
        }
        // Removes useless <a> around <img>
        if($($(this).parent()).is("a")){
            $(this).unwrap("<a></a>");
        }
        // Removes useless <p> around <img>
        if($($(this).parent()).is("p")){
            $(this).unwrap("<p></p>");
        }

        // Wraps images with a <figure>
        $(this).wrap("<figure class='picture'></figure");
        // Adds caption from alt text into <figcaption>
        new_caption = $(this).attr("alt");
        if (new_caption != caption) {
            $("<figcaption>" + new_caption + "</figcaption>").insertAfter($(this));
        } else {
            $("<figcaption class='idem'></figcaption>").insertAfter($(this));
        }
        caption = new_caption;
    });


    // MIX COLORS
    function pickHex(color1, color2, weight) {
        var p = weight;
        var w = p * 2 - 1;
        var w1 = (w/1+1) / 2;
        var w2 = 1 - w1;
        var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
            Math.round(color1[1] * w1 + color2[1] * w2),
            Math.round(color1[2] * w1 + color2[2] * w2)];
        return rgb;
    }
    pink = [255, 0, 74];
    blue = [19, 19, 70];
    articles = $(".fusion-post-content");
    for (i = 0; i <= articles.length; i++){
        rgb = pickHex(blue, pink, (i + 1)/(articles.length + 1));
        $(articles[i]).css("color", "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")");
    }

    // REMOVES EMPTY <p>
    //$("p").each(function(){
    //    console.log($(this).textContent);
    //    if ($(this).textContent == ""){
    //        $(this).hide();
    //    }
    //});

});
