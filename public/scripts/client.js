$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function (tweet) { 
    let $tweet = 
    $(`<article class="tweets-container">
    <header class="tweet-header">
      <div>
        <img src="${tweet.user.avatars}" class="img-tweet"><p>${tweet.user.name}</p>
      </div>
      <p>${tweet.user.handle}</p>
    </header>
    <p class="tweet-content">${tweet.content.text}</p>
    <footer>
      <p class="tweet-info">${tweet.created_at}</p>
      <p class="tweet-info">likes</p>
    </footer>
    </article>`)
    return $tweet;
  }

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet)
      $('#tweets').append($tweet); 
    }
  }


  renderTweets(data);

})





$(function() {
  $("form").on( "submit", function( event ) {
    event.preventDefault();
    const $tweet = $(this).serialize();
    $.post("/tweets", $tweet)
  });
});

