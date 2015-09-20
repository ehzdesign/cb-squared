$.ajax({
  type: 'GET',
  url: "https://api.instagram.com/v1/tags/cb2hairstudio/media/recent?client_id=698a1ba199a648ceacf26e00e835f81a&count=200?callback=myCallBack",
  contentType: "application/json",
  dataType: "jsonp"
}).done(function(data){
    //console.log(data);
    $.each(data.data, function (i, item) 
    {
      // var $newImage = $('<img src="'+item.images.low_resolution.url+'">');      
      var $newImage = $('<a href="'+item.link+'"><img src="'+item.images.low_resolution.url+'"></a>');
      var $newImageSecondary = $('<a href="'+item.link+'"><img src="'+item.images.low_resolution.url+'"></a>');    
      $('#instafeed').append($newImage);
      $('#instafeed-secondary').append($newImageSecondary);
    });
  });;