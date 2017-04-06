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

    $('#showProjects').click(function(){
        $(this).addClass('active_top_link'); 
        $('#showResume').removeClass('active_top_link');
        $('.all_resume').slideUp();
        $('.all_projects').slideDown();
    });

    $('#showResume').click(function(){
        $(this).addClass('active_top_link'); 
        $('#showProjects').removeClass('active_top_link');
        $('.all_resume').slideDown();
        $('.all_projects').slideUp()
    });

    //$('.all_resume').slideUp();
    //$('.all_projects').slideDown();




}); //domready ends


