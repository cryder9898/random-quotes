const getAnotherQuote = () => {
  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: data => {
      const post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#quote-title').text("-" + post.title);
      $('#quote-content').html(post.content);
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + post.content + '" ' + post.title));
    },
    cache: false
  });
}

$(document).ready(()=> {
  getAnotherQuote();
  $('#get-another-quote-button').on('click', getAnotherQuote);
  $('#tweet-quote').on('click', ()=> {
    let quote = $('#quote-content').text();
    let author = $('#quote-title').text();
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
     encodeURIComponent('"' + quote + '" ' + " -" + author));
  });
 });
