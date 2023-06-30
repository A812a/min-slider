

var images = Array.from(document.querySelectorAll('.item img'))
var imageMain = document.getElementById('imageMain')
var bg_color = document.querySelector('.bg-color')
var iconLeft = document.getElementById('iconLeft')
var iconClose = document.getElementById('iconClose')
var iconRight = document.getElementById('iconRight')
var currentIndex = 0;

for(var i=0 ; i<images.length ; i++) {
    images[i].addEventListener('click' , function(eventInfo) {
        var src = eventInfo.target.getAttribute('src')
        currentIndex = images.indexOf(eventInfo.target)
        bg_color.classList.replace('d-none' , 'd-flex')
        imageMain.style.backgroundImage = `url(${src})`
       
    })
}
bg_color.addEventListener('click' , function (eventInfo) {

     if( eventInfo.target != imageMain && eventInfo.target != iconLeft && eventInfo.target != iconRight ) {
            bg_color.classList.replace('d-flex' , 'd-none')
        }
})


iconClose.addEventListener('click' , close ) 
iconLeft.addEventListener('click' , left ) 
iconRight.addEventListener('click' , right ) 

function close() {

    bg_color.classList.replace('d-flex' , 'd-none')
}

function right() {

    currentIndex++
    if(currentIndex == images.length) {
        currentIndex = 0
    }
    var image = images[currentIndex].getAttribute('src')
    imageMain.style.backgroundImage = `url(${image})`
}

function left() {

    currentIndex--
    if(currentIndex < 0) {
        currentIndex = images.length - 1
    }
    var image = images[currentIndex].getAttribute('src')
    imageMain.style.backgroundImage = `url(${image})`
}

document.addEventListener('keyup' , function (eventInfo) {

    if(bg_color.classList.contains('d-flex')) {

     switch(eventInfo.key) {
        case "ArrowRight":
            right()
            break;
        case "ArrowLeft":
            left()
            break;
        case "Escape":
            close()
            break;    
    }
   }
})