var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}


function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

var og = [];
var att = [];

function addThumbClickHandler(thumb, index, arr) {
  'use strict';
  og[index] = thumb;
  att[index] = thumb.getAttribute('data-image-url');

  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    //reassign old attributes
    og.forEach(function(thumb2, index2){
      thumb2.setAttribute('data-image-url', att[index2]);
    });

    var rand = Math.floor((Math.random() * arr.length-1) + 0);
    if (index === rand) {
      setTacocat(thumb);
    }

    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}


/*
Gold Challenge: Random Otters

Write a function that changes the data-image-url of a random otter thumbnail
so that the detail image no longer matches the thumbnail. Use the URL of an
image of your choosing (though a web search for “tacocat” should provide a good one).
For an extra challenge, write a function that resets your otter thumbnails to
their original data-image-url values and changes another one at random.
 */

function setTacocat(thumbnail) {
  /* Gold Challenge: Random Otters */
  return thumbnail.setAttribute('data-image-url', 'http://www.thinkgeek.com/images/products/zoom/jthl_explode_kittens_tacocat_plush.jpg');
}

/*
When the Gold Challenge is complete, update your event initialization code and
thumbnail click event handlers so that whenever you click the otter thumbnail
that reveals the tacocat, all URLs are reset to their original data-image-url
values and a new thumbnail is chosen at random to point to the tacocat (rather
than the original data-image-url value).
 */

initializeEvents();
