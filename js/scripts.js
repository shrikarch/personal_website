function animateBars(){
    $('.progress-bar').each(function(){
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        });
    });
};


$(document).ready(function(){

    $('#skills_trigger').waypoint(function(direction){
        if(direction == 'down'){
            animateBars();
        };
    });




}); //domready ends


