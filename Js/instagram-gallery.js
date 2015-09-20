
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  // every time we load more, run this function
  get: "user",
  userId: 214372068,
  limit: 6,
  resolution: "standard_resolution",
  accessToken: "214372068.cf0499d.6b8811f629984ecabd8c6d8a758b631f",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
    	loadButton.setAttribute('disabled', 'disabled');
    }
},
});

// bind the load more button
loadButton.addEventListener('click', function() {
	feed.next();
});

// run our feed!
feed.run();