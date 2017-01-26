// SPOILERS BELOW

// SPOILERS BELOW


// SPOILERS BELOW




// SPOILERS BELOW








// SPOILERS BELOW


problem_set.how_many_h1_tags_are_on_the_page.answer = $("h1").length;

problem_set.how_many_p_tags_are_on_the_page.answer = $("p").length;

problem_set.grab_all_the_colorful_messages.answer = $(".alert");

problem_set.grab_the_red_message.answer = $(".alert-danger");

problem_set.grab_the_blue_message.answer = $(".alert-info")

problem_set.what_time_is_it.answer = $("h1 span").text();

problem_set.what_does_the_question_field_say.answer = $("input#question").val();

problem_set.how_tall_is_the_image_in_pixels.answer = $("img").height();

problem_set.how_wide_is_the_image_in_pixels.answer = $("img").width();

problem_set.what_is_the_image_url.answer = $("img").attr("src");

var left = parseInt( $(".add-me").eq(0).val() );
var right = parseInt( $(".add-me").eq(1).val() );
var total = left + right;
problem_set.what_is_the_sum_of_the_two_numbers.answer = total;

problem_set.modify_the_dom_to_display_the_result_of_the_addition; // MODIFY THE DOM DIRECTLY!
$("input#total").val(total);
