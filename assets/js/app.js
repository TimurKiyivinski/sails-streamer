(function() {
    console.log("Hello Sails!");
    var i = 1;
    
    window.setInterval(function(){
        i++;
        $('#streamer').attr('src', $('#streamer').data('url') + "/images/img" + i + ".jpg");
        if ( i == 1142 ) i = 1;
    }, 50);

})();
