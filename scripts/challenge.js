// code in here

problem_set.how_many_h1_tags_are_on_the_page.answer = $("h1").length; //document.querySelector('h1').length

problem_set.how_many_p_tags_are_on_the_page.answer = $("p").length;  //document.querySelector('p').length

problem_set.grab_all_the_colorful_message_elements.answer = $(".alert"); // document.querySelectorAll('.alert')

problem_set.grab_the_red_message_element.answer = $(".alert-danger"); // document.querySelector('.alert-danger')

problem_set.grab_the_blue_message_element.answer = $(".alert-info"); // document.querySelector('.alert-info')

problem_set.what_time_is_on_the_page.answer = $(".time").text();  // document.querySelector('.time').innerHTML

problem_set.what_does_the_question_field_say.answer = $('#question').val(); // document.querySelector('#question').value

problem_set.replace_the_question_field_with_the_word_yes; // MODIFY THE DOM DIRECTLY!
// your solution code here
  $('#question').val('can you grab this text with jQuery? ==> YES');
  //document.querySelector('#question').value = 'can you grab this text with jQuery? ==> YES'


problem_set.how_tall_is_the_image_in_pixels.answer = $(".img-thumbnail").height(); //document.querySelector(".img-thumbnail").height

problem_set.how_wide_is_the_image_in_pixels.answer = $(".img-thumbnail").width(); //document.querySelector(".img-thumbnail").width

problem_set.what_is_the_image_url.answer = $("img").attr('src'); //document.querySelector("img").getAttribute('src');



let firstValueBox = parseInt($('.add-me').eq(0).val(),10);//parseInt(document.querySelectorAll('.add-me')[0].value , 10);
let secondValueBox = parseInt($('.add-me').eq(1).val(),10);//parseInt(document.querySelectorAll('.add-me')[1].value , 10);


let sum_of_the_two_numbers=firstValueBox+secondValueBox;


problem_set.what_is_the_sum_of_the_two_numbers.answer = sum_of_the_two_numbers;


problem_set.modify_the_dom_to_display_the_result_of_the_addition; // MODIFY THE DOM DIRECTLY!
// your solution code here

  $('#total').val(firstValueBox+secondValueBox) //document.querySelector('#total').value = firstValueBox + secondValueBox;


problem_set.grab_the_red_queen.answer = $("#chessboard .glyphicon-queen.red") // document.querySelector('.glyphicon-queen.red');


problem_set.grab_the_square_the_red_queen_is_in.answer = $('.square.endangered') // document.querySelector('.square.endangered');

problem_set.remove_the_endangered_class_from_the_red_queens_square; // MODIFY THE DOM DIRECTLY!
// your solution code here

  $('.square.endangered').removeClass('endangered') //document.querySelector('.square.endangered').classList.remove('endangered');



problem_set.move_the_red_queen_to_safety; // MODIFY THE DOM DIRECTLY!
// your solution code here

  $('.col-xs-1.square').eq(56).append($('.glyphicon-queen.red')); //document.querySelectorAll('.col-xs-1.square')[56].appendChild(document.querySelector('.glyphicon-queen.red'));

  // not mine solution BELOW //
  //$(".row:last-of-type .square:first-of-type").append($("#chessboard .glyphicon-queen.red"));



//// DO NOT MODIFY ////
//// DO NOT MODIFY ////
removeCanary();
