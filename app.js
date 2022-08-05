const moonPath =
"M169 315C169 488.97 342 630 342 630C153.119 630 0 488.97 0 315C0 141.03 153.119 0 342 0C342 0 169 141.03 169 315Z";

const sunPath =
 "M653 269.5C653 418.341 506.821 539 326.5 539C146.179 539 0 418.341 0 269.5C0 120.659 146.179 0 326.5 0C506.821 0 653 120.659 653 269.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// we need to click on the sun

darkMode.addEventListener('click', () => {
    // anime.js
    //Here we set the timeline

    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    //Add different animations to the timeline
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath :  moonPath}
        ]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
    }, "-= 350"
    )
    .add({
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, "-= 700");
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;

    }
});