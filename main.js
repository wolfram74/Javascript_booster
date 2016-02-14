$('document').ready(function(){
  console.log('page ready')
  $('#astro_date').on('submit', astroParse)
})

console.log('main loaded')

$('input').on('click', shout)
var shout = function(){
  console.log('loud noises')
}
var astroParse = function(event){
  event.preventDefault();
  console.log('grabbed')
  var dateString = $(event.target).serialize()
  var dateParam = parseDate(dateString)
  console.log(dateParam)
  var request = $.ajax(
    {
      type: 'get',
      url:'http://www.astro-phys.com/api/de406/states',
      data: {
        date: dateParam,
        bodies: 'earth'
      }
    }
  )

  request.done(function(response){
    var $spam = $('<p></p>')
    $spam.html(response.results.earth[0].join('-'))
    $('.results').append($spam)
  })
}

var parseDate = function(string){
  //assumes year=YYYY&month=mm&day=dd
  //outputs yyyy-mm-dd
  var dateArray = string.split('&')
  var outputArray = []
  for(var index = 0; index < dateArray.length; index++){
    outputArray.push( dateArray[index].split('=')[1])
  }
  return outputArray.join('-')
}
