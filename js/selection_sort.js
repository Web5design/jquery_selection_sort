var cleaned_text;

function grab_and_clean_text(callback){
  $.getJSON('http://hipsterjesus.com/api/?type=hipster-centric&html=false', function(data) {
    //Remove periods
    var hipster_text = data.text.replace(/\./g, "");
    //Replace line breaks with newlines
    hipster_text = hipster_text.replace(/(\r\n|\n|\r)/gm," ");
    //Remove duplicate spaces
    cleaned_text = hipster_text.replace(/  /g, ' ');
  }).done(callback);
}

$(function(){
  grab_and_clean_text(function(){
    // Stuff that can happen only after the text is returned
    console.log(cleaned_text);
  });
});