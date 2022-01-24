// now i am going to get the element
document.getElementById('mClick').addEventListener('click',displayMessage);

function displayMessage(){
  if(document.getElementById('imageClick').src.match('light_onn.jpg')){
    console.log('on');
    document.getElementById('imageClick').src = 'light_off.jpg';
    document.body.style.color = "black";
  }else{
    console.log('off');
    document.getElementById('imageClick').src = 'light_onn.jpg';
    document.getElementById('imageClick').style.background = "black";
    document.body.style.color = "red";
  }
  
}