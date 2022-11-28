$(document).ready(function(){
    $('.item').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'todos'){
            $('.prod').show('1000');
        } else {
            $('.prod').not('.'+ value).hide('1000');
            $('.prod').filter('.'+value).show('1000');
        }
    })

    $('.item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    
})
