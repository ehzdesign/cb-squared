
var instagramBtn = document.createElement("button");
instagramBtn.id = "load-more";

var loadButton = document.getElementById('load-more');




var feed = new Instafeed({
  // every time we load more, run this function
  get: "user",
  userId: 214372068,
  limit: 21,
  resolution: "thumbnail",
  accessToken: "214372068.cf0499d.6b8811f629984ecabd8c6d8a758b631f",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
    	loadButton.setAttribute('disabled', 'disabled');
    }
},
});




// bind the load more button
if(loadButton){
  loadButton.addEventListener('click', function() {
  	feed.next();
  });
}
// run our feed!

 
  feed.run(); 
  console.log('running'); 

//populate gallery section with chosen gallery
  //user clicks nav link
$('.gallery-nav a').on('click', function(e){ 
    //stop loading new link
  e.preventDefault();                              
  var url = this.href;
   //get value of href  
  console.log(url + ' #content');                            
 //clear current link indicator
  $('.gallery-nav a.current-link').removeClass('current-link'); 
     // new current indicator
  $(this).addClass('current-link');               
   // remove old content
  $('#content').remove(); 
   // insert new content
  $('.photo-gallery__items').load(url + ' #content').hide().fadeIn('slow'); 
  feed.run();
});