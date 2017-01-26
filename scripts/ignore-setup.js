var problem_set = {};

function Question(q, a) {
  this.answer = ""; // submitted answer
  if ( typeof a === "function" ) {
    this.correct_answer = a();
  } else {
    this.correct_answer = a;
  }
  problem_set[q] = this;
}
Question.prototype = {
  check_answer: function(a){
    var a = a || this.answer;

    if (a === this.correct_answer) {
      return true;
    }

    // compare equality of DOM nodes (regardless of $ vs. vanilla)
    return $(this.correct_answer).is(a);
  }
}


new Question("how_many_h1_tags_are_on_the_page", 1);

new Question("how_many_p_tags_are_on_the_page", 0);

new Question("grab_all_the_buttons", $("button"));

new Question("grab_the_red_button", $("button").eq(0) );

new Question("grab_the_blue_button", $("button").eq(4) );

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
