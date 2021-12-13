var index = 0;
var likeButton, post;

var interval = setInterval(() => {
  try {

    //Refresh node list
    if (index % 2 == 0) {
      post = document.querySelectorAll("div.feed-shared-social-actions")
    }

    //Gets the like button from posts
    likeButton = post[index].children[0].children[0];

    //Like the unliked posts
    if (likeButton.ariaPressed == 'false') {
      likeButton.style.background = "red";
      likeButton.click();
    }

    //Auto scrolls to next post
    setTimeout(() => {
      post[index].children[0].scrollIntoView();
      index++;
    }, 1000);

  } 
  //Clears the interval on error. if there are no more posts gives an error
  catch (err) {
    clearInterval(interval);
  }

}, 2000);
