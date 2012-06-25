$(document).ready(function() {
    $('div.select > select').change(function() {
        $(this).parent().children('span').text($(this).children('option[value="' + $(this).val() + '"]').text());
    });
    $('div.select > select').change();
    
    if($.datepicker) {
        $.datepicker.setDefaults($.datepicker.regional['pl']);
    
        $('#meetingtimefrom, #meetingtimeto').datepicker({
            dateFormat: 'dd-mm-yy',
            maxDate: (new Date().getYear() + 1902).toString() + '-12-31'
        });
    }

    $('#content ul.chapters li h3 a').mouseover(function(e) {
        $(this).parent().parent().find('a.submit').addClass('submit-hover');
    }).mouseout(function(e) {
        $(this).parent().parent().find('a.submit').removeClass('submit-hover');
    });

    $('dl.form > dt:not(.free) + dd > input[class^="text"]').blur(function(e) {
        if($(this).val() == '' || ($(this).attr('id').match(/^.?email$/) && !$(this).val().match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i))) {
            $(this).parent().addClass('invalid' + ($(this).is('textarea') ? '-textarea' : ''));
        } else {
            $(this).parent().removeClass('invalid').removeClass('invalid-textarea');
        }
    });
    
    $('form').submit(function(e) {
        var valid = true;
        $(this).find('dl.form > dt:not(.free) + dd > input[class^="text"]').each(function(i) {
            if($(this).val() == '' || ($(this).attr('id').match(/^.?email$/) && !$(this).val().match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i))) {
                valid = false;
            $(this).parent().addClass('invalid' + ($(this).is('textarea') ? '-textarea' : ''));
        } else {
            $(this).parent().removeClass('invalid').removeClass('invalid-textarea');
            }
        });
        if(!valid) {
            e.preventDefault();
        }
    });


});