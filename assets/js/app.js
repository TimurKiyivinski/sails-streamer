(function() {
    var getLatest = function() {
        // Streamer objects
        var streamer = $('#streamer');
        var screenshot = $('#screenshot');
        
        // Exit if paused
        if (streamer.data('play') == 0) return;
        
        // Increment frame
        var frame = streamer.data('frame') + 1;
        streamer.data('frame', frame);
        
        // Crete frame URL
        var src = streamer.data('url') + "/images/frame-" + frame + ".png"
        
        // Apply frame
        streamer.attr('src', src);
        screenshot.attr('href', src);
        
        // Reset on final frame
        if (frame == streamer.data('end'))
            streamer.data('frame', streamer.data('start'));
    }
    
    $('#toggle').click(function() {
        // Streamer objects
        var streamer = $('#streamer');
        streamer.data('play') == 0 ? streamer.data('play', 1) : streamer.data('play', 0);
    });
    
    window.setInterval(function(){
        getLatest();
    }, 10);

})();
