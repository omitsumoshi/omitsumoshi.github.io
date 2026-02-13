$(document).ready(function() {
    const square = $('.square');

    $('#button').click(function() {
        square.animate({height: 100, width: 100, marginLeft: 100}, 3000, function(){
           $(this).toggleClass('niebieski');
               setTimeout(function(){square.append('<h2>Animacja zakonczyla sie</h2>')}, 3000);
                    });
       
    });
    });




// //     $('#button').click(function() {
// //         square.animate({height: 100, width: 100}, 3000, function(){
// //             $(this).after('<h2>Animacja zakonczona</h2> ')
// //         });

// //     });
// // });

//     $('#button').click(function() {
//         square.animate({height: 100, width: 100, marginLeft: 100}, 3000, function(){
//             $(this).after(function(){
//                 square.animate({backgroundColor: "#0000FF"}), 5000, function(){
//                     $(this).after('<h2>Animacja zakonczyla sie</h2>')
//                 }
//             })
//         });

//     });
// });
