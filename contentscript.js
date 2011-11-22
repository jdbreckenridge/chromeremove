var block_url = "https://www.google.com/webmasters/tools/removals-request?hl=en&siteUrl=";

function get_hostname(url) {
    var m = ((url||'')+'').match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
}

function add_block_links() {
    $(".r").each(function() {
        var url = $(this).children("a").attr("href");
        $(this).after('<span class="gl"> - <a href="'+block_url+get_hostname(url)+"/&urlt="+$.URLEncode(url)+'" target="_blank">Remove Page</a></span>');
    });
}

$(document).ready(function () {
    add_block_links();
   
    $(window).hashchange( function(){
        add_block_links().delay(800);
    });
});