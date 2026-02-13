$(document).ready(function(){
    $('.button1').click(function(){
        const paragraph = $('p');

        paragraph.eq(0).before(paragraph.eq(4));
       
    })
})

$(document).ready(function(){
    $('.button2').click(function(){
        const paragraph = $('p');

        paragraph.eq(4).before(paragraph.eq(0));
       
    })
})

