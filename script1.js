$(document).ready(function(){ 

    /* кнопки radio*/
    $('.active').css({ 'opacity': '1' },);
    $('.radio').click(function () {
        $('.radio').attr('non-active');
        $('.non-active').css({opacity: '0.5'},);
        $(this).attr('active');
        $(this).css({ opacity: '1' },);   
        
    });

    $("#on").click(function () {
        $("#on").css({
                    opacity: "0.5"
        });
        $("#off").css({ opacity: "1" });
    });
    $("#off").click(function () {
        $("#off").css({
            opacity: "0.5"
        });
        $("#on").css({opacity: "1"});
    });

    /*checkbox*/
    $('input:checkbox').click(function () {
        if ($(this).is(':checked')) {
            $(this).parent().css("opacity", "1");
        } else {
            $(this).parent().css("opacity", "0.5");
        }
    });

     
});

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    document.getElementById("myRange").oninput = function () {
        this.style.background = 'linear-gradient(to right, #FF7777 0%, #FF7777 ' + this.value + '%, grey ' + this.value + '%, grey 100%)',        
         output.innerHTML = this.value * 100;
    };
    

        
