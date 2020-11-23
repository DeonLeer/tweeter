$(document).ready(function() {

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function (tweet) { 
    let timestamp = tweet.created_at;
    dateObj = new Date(timestamp); 
    dateString = dateObj.toUTCString(); 
    let $tweet =
    $(`<article class="tweets-container">
    <header class="tweet-header">
      <div class="pfp-name">
        <img src="${tweet.user.avatars}" class="img-tweet"><span>${tweet.user.name}</span>
      </div>
      <p>${tweet.user.handle}</p>
    </header>
      <p class="tweet-content">${escape(tweet.content.text)}</p>
    <footer>
      <p class="tweet-info">${dateString}</p>
      <p tag="likes">❤️♻️🚩️</p>
    </footer>
    </article>`)
    return $tweet;
  }

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      
      let $tweet = createTweetElement(tweet)
      $('#tweetsarea').prepend($tweet); 
    }
  }

  const loadTweets = function() {
    $(function() {
      $.get("/tweets", function(data) {
        renderTweets(data);
      })
    })
  }

  loadTweets()

  $(function() {
    $("form").on( "submit", function( event ) {
      event.preventDefault();
      const tweetLength = ($("textarea").val()).length;
      if (tweetLength <= 0) {
        return $(".alert-empty").slideDown();
      } 
      if (tweetLength > 140){
        return $(".alert-long").slideDown();
      }
      const $tweet = $(this).serialize();
      $.post("/tweets", $tweet)
      .then(function () {
        $.get("/tweets", function(data) {
          const newTweet = data[data.length - 1];
          const $newTweet = createTweetElement(newTweet);
          $('#tweetsarea').prepend($newTweet);
          $("textarea").val("");
          $(".counter").val('140');
        })
      })
    });
  });
})

//($("textarea").val())

