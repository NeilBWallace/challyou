var counter = 0;
function changeBG(){
    var imgs = [
        "url(../background1.jpg)",
        "url(../background2.jpg)",
        "url(../background3.jpg)",
        "url(../background4.jpg)",
         ]
    
    if(counter === imgs.length) counter = 0;
    $(".b").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 8000);


