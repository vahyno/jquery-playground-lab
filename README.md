## jQuery Playground

In this lab you will use jQuery methods to answer questions about what's happening on the page.

For example, given the following prompt:

``` js
    answer.how_many_h1_tags_are_on_the_page = "YOUR JQUERY GOES HERE";
```

You would need to select all the `h1` tags on the page, and the count them:

``` js
    // using jQuery (preferred)
    $("h1").length;
    
    // or using vanilla javascript
    document.querySelector("h1").length;
```

So your solution would look like this:

``` js
    answer.how_many_h1_tags_are_on_the_page = $("h1").length;
```

Open `challenge.js` to get started!
