$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/2814713.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $(response.courses.completed).each(function(index,item){
        
        $('#badges').append('<div class="course"><h3>' + item.title + '</h3><img src="' + item.badge + '"/><a href=' + item.url+ ' target="_blank" class="btn btn-primary" Text="See Course" >See Course</a> '); 
      })
    }
  });

});
