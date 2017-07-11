var quote = "", author = "";

function getQuote(e) {
     $.ajax({
       type: "GET",
       url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
       success: function(data) {
         var post = data.shift(); // The data is an array of posts. Grab the first one.
         author = post.title;
         quote = post.content;
         $('#quote-title').text("-" + author);
         $('#quote-content').html(quote);
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
       },
       cache: true
     });
   };

$(document).ready(function() {
  getQuote();
  $('#get-another-quote-button').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    quote = quote.slice(3,quote.length-5);
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + " -" + author));
  });
 });
