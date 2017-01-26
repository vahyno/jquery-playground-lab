//// DO NOT MODIFY ///
//// DO NOT MODIFY ///
//// DO NOT MODIFY ///

function removeCanary(){
  $("#canary").remove();
}

var problem_set = {};

function Question(q, a_or_cb) {
  this.answer = null; // submitted answer
  if ( typeof a_or_cb === "function" ) {
    this.correct_answer = a_or_cb();
  } else {
    this.correct_answer = a_or_cb;
  }
  window.problem_set[q] = this;
}
Question.prototype = {
  check_answer: function(a){
    var a = a || this.answer;

    if ( ['string', 'number', 'undefined'].includes(typeof this.correct_answer) ) {
      return (a === this.correct_answer);
    }

    // compare equality of DOM nodes (regardless of $ vs. vanilla)
    return $(this.correct_answer).is(a);
  }
}


new Question("how_many_h1_tags_are_on_the_page", $("h1").length);

new Question("how_many_p_tags_are_on_the_page", $("p").length);

new Question("grab_all_the_colorful_messages", $(".alert"));

new Question("grab_the_red_message", $(".alert-danger") );

new Question("grab_the_blue_message", $(".alert-info") );

new Question("what_time_is_it", function(){
  var d = new Date(),
      h = d.getHours(),
      m = pad(d.getMinutes(),2),
      s = pad(d.getSeconds(),2),
      time = `${h}:${m}:${s}`;

  $(".time").text(time);

  return time;

  ////

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
});

new Question("how_tall_is_the_image_in_pixels", $("img").height());

new Question("how_wide_is_the_image_in_pixels", $("img").width());

new Question("what_is_the_image_url", function(){
  var choices = [
    "http://imgs.xkcd.com/comics/voyager_1.png",
    "http://imgs.xkcd.com/comics/bumblebees.png",
    "http://imgs.xkcd.com/comics/island_color.jpg"
  ];

  var random = Math.round(Math.random()*10) % choices.length;
  var url = choices[random];
  $("img").attr("src", url);

  return url;
});

new Question("what_does_the_question_field_say", $("input#question").val());

new Question("what_is_the_sum_of_the_two_numbers", function(){
  var total = 0;

  $("input.add-me").each(function(){
    var n = Math.round((Math.random()*10));
    $(this).val( n );
    total += n;
  })

  return total;
});


new Question("what_is_the_sum_of_the_two_numbers", function(){
  var total = 0;

  $("input.add-me").each(function(){
    var n = Math.round((Math.random()*10));
    $(this).val( n );
    total += n;
  })

  return total;
});
