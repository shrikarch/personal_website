function animateBars(){
    $('.progress-bar').each(function(){
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        });
    });
};

function addIf(screenspec){
    if(screenspec == 'mobile'){
        $('#firstname_sidebar').append('<span id="skills_trigger" class="hidden-sm-up"></span>');
        $('.excess_on_sm').slideUp();
    }else if(screenspec == 'desktop'){
        $('#elixir_github').append('<span id="skills_trigger" class="hidden-sm-up"></span>');
    }
};

$(document).ready(function(){
    alert("ale");

    var screenSpecs = function(){
        return $('html').attr('class').split(" ")
    }
    console.log(screenSpecs()[1]);

    addIf(screenSpecs()[1]);
    $('.show_more_text').text(
        "Show " + $('.right_section .excess_on_sm .info_block').length+" more"
    );
    $('.show_more_block .btn').click(function(){
        $('.excess_on_sm').slideDown("slow");
        $('.show_more_block').fadeOut();

    });


    //Large Screens exclusive
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


    //universal
    $('#skills_trigger').waypoint(function(direction){
        if(direction == 'down'){
            animateBars();
        };
    });
    console.log($('.right_section .excess_on_sm .info_block').length);

    $('.all_resume').slideUp();
    $('.all_projects').hide();




}); //domready ends
