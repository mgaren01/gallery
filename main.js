//INIT
const displayedImage = document.querySelector('.displayed-img');  //creates main image display
const thumbBar = document.querySelector('.thumb-bar');  //creates thumbnail bar

const btn = document.querySelector('button');  //creates button
const overlay = document.querySelector('.overlay');  //creates overlay

const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg'];  //creates image array

//RUN
/* Looping through images */
//each iteration, add image to page

//const newImage = document.createElement('img');  //creates object in memory
//newImage.setAttribute('src', xxx);  //sets source attribute to a string
//thumbBar.appendChild(newImage);  //adds child node to thumbBar on page

for (let i = 0; i < imgs.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '/images/' + imgs[i]);
    //give new image onclick/click handler 

    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", imageClicker)
}

function imageClicker(e) {
    //console.log(e.target.src)
    displayedImage.setAttribute('src', e.target.src)
}

/* Wiring up the Darken/Lighten button */

//give button onclick handler
//if button has class 'dark', then give class 'light'
//if button has class 'light', then give class 'dark'

btn.addEventListener("click", lightClicker)

function lightClicker(e) {
    if (e.target.getAttribute('class') == 'dark') {
        //if dark, then light
        //if light, then dark
        e.target.setAttribute('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    } else {
        e.target.setAttribute('class', 'dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = "rgba(0,0,0,0.0)"
    }
}

/*btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx; */
