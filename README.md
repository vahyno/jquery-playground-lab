## jQuery Playground

In this lab you will use jQuery methods to answer questions about what's happening on the page.

For example, given the following prompt:

``` js
    problem_set.how_many_h1_tags_are_on_the_page.answer = "YOUR JQUERY GOES HERE";
```

You would need to select all the `h1` tags on the page, and then count them:

``` js
    // using jQuery (preferred)
    $("h1").length;
    
    // or using vanilla javascript
    document.querySelector("h1").length;
```

So your solution would look like this:

``` js
    problem_set.how_many_h1_tags_are_on_the_page.answer = $("h1").length;
```

See `challenge.js` for the full problem set.

## Getting Started
1. Clone this repo, and open it in your text editor of choice.
1. Launch `index.html` in your Chrome Browser.
    - Make sure your Chrome Javascript Console is open!
    - You'll see a list of questions and results.
1. We encourage you to primarily code in your console. When you've solved a problem, copy your answer into `challenge.js`.
