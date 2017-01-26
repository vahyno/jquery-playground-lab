//// DO NOT MODIFY ///
//// DO NOT MODIFY ///
//// DO NOT MODIFY ///

function removeCanary(){
  $("#canary").remove();
}

var problem_set = {};

function Question(q, getAnswer, check_dom_for_answer) {
  this.answer = null; // user submitted answer
  this.getAnswer = getAnswer;
  this.check_dom_for_answer = check_dom_for_answer || false;
  window.problem_set[q] = this;
}
Question.prototype = {
  isCorrectAnswer: function(){
    if (this.check_dom_for_answer) {
      // Verify that the desired change has occured in the DOM.
      return this.getAnswer();
    }

    this.correct_answer = this.getAnswer();

    // compare equality of primitive values (no dom nodes!)
    if ( ['string', 'number', 'undefined'].includes(typeof this.correct_answer) ) {
      return (this.answer === this.correct_answer);
    }

    // compare equality of DOM nodes (regardless of $ vs. vanilla)
    return $(this.correct_answer).is(this.answer);
  }
}


new Question("how_many_h1_tags_are_on_the_page", function answer(){
  return $("h1").length;
});

new Question("how_many_p_tags_are_on_the_page", function answer(){
  return $("p").length;
});

new Question("grab_all_the_colorful_messages", function answer(){
  return $(".alert");
});

new Question("grab_the_red_message", function answer(){
  return $(".alert-danger");
});

new Question("grab_the_blue_message", function answer(){
  return $(".alert-info");
});

new Question("what_time_is_it", (function setup(){
  var d = new Date(),
      h = d.getHours(),
      m = pad(d.getMinutes(),2),
      s = pad(d.getSeconds(),2),
      time = `${h}:${m}:${s}`;

  $(".time").text(time);

  return function answer(){
    return time;
  };

  ////

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}()));

new Question("how_tall_is_the_image_in_pixels", function answer(){
  return $("img").height();
});

new Question("how_wide_is_the_image_in_pixels", function answer(){
  return $("img").width();
});

new Question("what_is_the_image_url", (function setup(){
  var choices = [
    "http://imgs.xkcd.com/comics/voyager_1.png",
    "http://imgs.xkcd.com/comics/bumblebees.png",
    "http://imgs.xkcd.com/comics/island_color.jpg"
  ];

  var random = Math.round(Math.random()*10) % choices.length;
  var url = choices[random];
  $("img").attr("src", url);

  return function answer(){
    return url;
  }

}()));

new Question("what_does_the_question_field_say", function answer(){
  return $("input#question").val();
});

new Question("what_is_the_sum_of_the_two_numbers", (function setup(){
  var total = 0;

  $("input.add-me").each(function(){
    var n = Math.round((Math.random()*10));
    $(this).val( n );
    total += n;
  })

  return function answer(){
    return total;
  }

}()));
