
function upDate(previewPic){
    /*changing the url for the background image of the div with the id = "image" 
    to the source file of the preview image */
    document.getElementById('image').style.backgroundImage = "url('"+previewPic.src+"')"; 

    // document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')"; //another way to achieve the same thing as the above statement.

    /*changing the text  of the div with the id = "image" 
      to the alt text of the preview image */ 
    document.getElementById('image').innerHTML = previewPic.alt;   
}

function unDo(){
    /*updating the url for the background image of the div with the id = "image" 
      back to the orginal-image */ 
    document.getElementById('image').style.backgroundImage = "url('')"; 
    
    //storing the original text in a variable
    var text = "Hover over an image below to display here"; 

    /*changing the text of the div with the id = "image" 
     back to the original text */         
    document.getElementById('image').innerHTML = text; 		
}