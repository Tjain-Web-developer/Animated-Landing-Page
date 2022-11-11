var letter = document.querySelector("#letter h1");
var animation = document.querySelectorAll("#box div");
var single = document.querySelector("#single");
var letterdiv = document.querySelector("#letter");
var animation2 = document.querySelectorAll("#bigbox div");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var lbtn = document.querySelector(".lbtn");
var rbtn = document.querySelector(".rbtn");
var slide = document.querySelector("#square");
var sec = document.querySelectorAll(".sec");
var dots = document.querySelectorAll("#dots span");
const comeback1 = $("#textdiv h3").textillate({
    in: {
        effect: 'fadeInRightBig'
    },
    autoStart: false
});

let comeback2 = $('#txt .txtHone').textillate({
    in: {
        effect: 'fadeInUp'
    },
    type: 'word',
    autoStart: false
})

const comeback3 = $('#txt .txtHtwo').textillate({
    in: {
        effect: 'fadeInUp'
    },
    type: 'word',
    autoStart: false
})

const comeback4 = $('#icons .icon1').textillate({
    in: {
        effect: 'fadeIn'
    },
    autoStart: false
})

const comeback5 = $("#topleft small").textillate({
    in: {
        effect: 'fadeInRightBig'
    },
    autoStart: false
});

const comeback6 = $('#txtCtn .hthreeTop').textillate({
    in: {
        effect: 'fadeIn'
    },
    autoStart: false
})

const comeback7 = $('#txtCtn .hthreeBottom').textillate({
    in: {
        effect: 'fadeIn'
    },
    autoStart: false
})

letter.textContent = `${String.fromCharCode(102)}`

gsap.from("#letter h1",{
    y: "100px",
    transform: "rotateY(70deg) rotateZ(5deg)",
    ease: "Power2.easeOut",
    duration: 2
})

setTimeout(function(){
    var i = 102;
    setInterval(function(){
        if(i<115){
            i++;
            letter.textContent = `${String.fromCharCode(i)}`
        }
    },0100)
    animation.forEach(function(elem){
        elem.style.animationPlayState = 'running';
    })
    setTimeout(function(){
        single.style.right = "89%";
        single.style.opacity = "1";
    },1000)
},2000)

setTimeout(function(){
    animation2.forEach(function(elem){
        elem.style.animationPlayState = 'running';
    });
    letter.style.fontSize = "50px";
    letterdiv.style.bottom = "85%";
    single.style.bottom = "90%";
    single.style.fontSize = "30px";
    single.style.right = "92%";
},4000)

gsap.to("#main2",{
    x: "100%",
    ease: "Power3.easeInOut",
    duration: 1.5,
    delay: 4.6
})

var anim3 = document.querySelectorAll("#layer div");

setTimeout(function(){
    anim3.forEach(function(elem){
        elem.style.animationPlayState = 'running'
    });
},7000)

var tl = gsap.timeline();
tl.from("#txt .txtHtwo",{
    y: "55px",
    opacity: 0,
    duration: .8,
    ease: "Power2.easeInOut",
    stagger: .15,
    delay: 5.7,
    onStart: function(elem){
        // $("#textdiv h3").textillate({in: {effect: 'fadeInRightBig'}});
        comeback3.textillate('start');
    }
});

tl.from("#txt .txtHone",{
    y: "55px",
    opacity: 0,
    duration: .8,
    ease: "Power2.easeInOut",
    stagger: .15,
    delay: 5.7,
    onStart: function(elem){
        // $("#textdiv h3").textillate({in: {effect: 'fadeInRightBig'}});
        comeback2.textillate('start');
    }
},"-=7");

tl.from("#textdiv h3",{
    x: "10px",
    duration: .5,
    opacity: 0,
    onStart: function(elem){
        // $("#textdiv h3").textillate({in: {effect: 'fadeInRightBig'}});
        comeback1.textillate('start');
    }
},"-=.5")

tl.from("#icon2",{
    x: "70px",
    duration: .5,
    opacity: 0,
    ease: "easeInOut"
})

tl.from(".icon1",{
    x: "100px",
    duration: .5,
    opacity: 0,
    ease: "easeInOut",
    onStart: function(elem){
        // $("#textdiv h3").textillate({in: {effect: 'fadeInRightBig'}});
        comeback4.textillate('start');
    }
},"-=.3")

tl.from("#square",{
    x: "100%",
    opacity: 0,
    duration: .6,
    ease: "Expo.ease"
},"-=1")
tl.from("#navicon1",{
    x: "500px",
    opacity: 0,
    duration: .6,
    ease: "Expo.ease"
},"-=1")
tl.from("#navicon2",{
    x: "10px",
    opacity: 0,
    duration: .3,
    ease: "Expo.ese"
},"-=1")
tl.from("#btmtxt p",{
    x: "50px",
    opacity: 0,
    ease: "linear",
    stagger: .1,
    duration: .25
},"-=.5")
tl.from("#dots span",{
    x: "60px",
    opacity: 0,
    ease: "linear",
    stagger: -.25,
    duration: .4
},"-=.7")
tl.from("#rotatediv",{
    y: "15px",
    opacity: 0,
    ease: "linear",
    duration: .4
},"-=.7")
tl.from("#img1",{
    x: "100%",
    opacity: 0,
    duration: .7,
    ease: "Back.easeOut.config(1.7)"
})
tl.from("#topleft small",{
    x: "30px",
    ease: "linear",
    duration: .2,
    opacity: 0,
    onStart: function(elem){
        comeback5.textillate('start');
    }
},"-=.5")
tl.from("#txtCtn .hthreeTop",{
    x: "30px",
    ease: "linear",
    duration: .2,
    opacity: 0,
    stagger: .1,
    onStart: function(elem){
        // $("#textdiv h3").textillate({in: {effect: 'fadeInRightBig'}});
        comeback6.textillate('start');
    }
},"-=.5")

tl.from("#txtCtn .hthreeBottom",{
    x: "30px",
    ease: "linear",
    duration: .2,
    opacity: 0,
    stagger: .1,
    onStart: function(elem){
        // $("#textdiv h3").textillate({in: {effect: 'fadeInRightBig'}});
        comeback7.textillate('start');
    }
},"-=.5")
tl.from("#button",{
    x: "100%",
    ease: "Power1.easeInOut",
    duration: .5,
    opacity: 0,
},"-=.4")
tl.from("#button h4",{
    x: "20px",
    ease: "Power1.easeInOut",
    duration: .5,
    opacity: 0,
},"-=.4")
tl.from("#button i",{
    opacity: 0,
    ease: "Power1.easeInOut",
    duration: .5,
    stagger: .1,
    x: "15px"
},"-=.4")

// -----------function to and fro-----------

// var add = function(elem){
//     elem.classList.add("toandfro");
// }

// setTimeout(function(){
//     img1.classList.add("toandfro");
// },8500)

const tani = document.querySelectorAll(".tani");
const shower = document.querySelectorAll("#textdiv h3");
const shower2 = document.querySelectorAll(".txtHone");
const shower3 = document.querySelectorAll(".txtHtwo");
const shower4 = document.querySelectorAll('#icons .icon1');
const shower5 = document.querySelectorAll('#icons .icon2');
const shower6 = document.querySelectorAll('#topleft small');
const shower7 = document.querySelectorAll('#txtCtn .hthreeTop');
const shower8 = document.querySelectorAll('#txtCtn .hthreeBottom');
var state = 0;

lbtn.addEventListener("click",function(){
    if(state === 3){
        var value = 200;
        onLftBtnClick(state,value);
        state = 2;
    }
    else if(state === 2){
        var value = 100;
        onLftBtnClick(state,value);
        state = 1;
    }
    else if(state === 1){
        var value = 0;
        onLftBtnClick(state,value);
        state = 0;
    }
    else{}
});

rbtn.addEventListener("click",function(){
    if(state === 0){
        var value = 100;
        onRhtBtnClick(state,value);
        state = 1;
    }
    else if(state === 1){
        var value = 200;
        onRhtBtnClick(state,value);
        state = 2;
    }
    else if(state === 2){
        var value = 300;
        onRhtBtnClick(state,value);
        state = 3;
    }
    else{}
});

var onTap = function(elem){
    elem.forEach(function(bot){
        bot.classList.remove("show");
    });
    elem[state].classList.add("show");
    elem[state].style.opacity = "1";
}
var run = function(elem){
    elem.forEach(function(bot){
        bot.classList.remove('moveicon')
        bot.classList.remove('show')
    })
    elem[state].classList.add('moveicon');
    elem[state].classList.add('show');
    setTimeout(function(){
        elem[state].style.opacity = '1';
    },100)
}

var onRhtBtnClick = function(state,value){
    // for moving images section
    sec.forEach(function(elem){
        elem.style.transform = `translate(-${value}%)`;
    });
    // for changing dots indication
    dots.forEach(function(dot){
        dot.classList.remove("active");
    });
    dots[state+1].classList.add("active");

    // for moving elements to left on click and fade out
    tani.forEach(function(element){
        element.style.transform = 'translate(-250px)';
        element.style.opacity = '0';
    })

    // for moving icon elements to original position
    setTimeout(function(){
        shower4.forEach(function(e){
            e.style.transform = 'translateX(0)';
            e.style.opacity = '0';
        })
        shower5.forEach(function(e){
            e.style.transform = 'translateX(0)';
            e.style.opacity = '0';
        })
    },700)
    setTimeout(function(){
        // for moving text elements to original position
        tani.forEach(function(element){
            element.style.transform = 'translate(0)';
        })

        // to apply start animation on text elements
        setTimeout(function(){
            comeback1.textillate('start');
            comeback2.textillate('start');
            comeback3.textillate('start');
            comeback4.textillate('start');
            comeback5.textillate('start');
            comeback6.textillate('start');
            comeback7.textillate('start');
            
            onTap(shower);
            onTap(shower2);
            onTap(shower6);
            onTap(shower7);
            onTap(shower8);
            setTimeout(function(){
                onTap(shower3);
            },150)
        },700)
        
        // to apply start animation on icon elements
        run(shower5);
        setTimeout(function(){
            run(shower4);
        },300)
    },800)
}

var onLftBtnClick = function(state,value){
    // instruNum.textContent = `0${state}`
    sec.forEach(function(elem){
        elem.style.transform = `translate(-${value}%)`;
    });
    dots.forEach(function(dot){
        dot.classList.remove("active");
    });
    dots[state-1].classList.add("active");

    // for moving elements to left on click and fade out
    tani.forEach(function(element){
        element.style.transform = 'translate(-250px)';
        element.style.opacity = '0';
    })

    // for moving icon elements to original position
    setTimeout(function(){
        shower4.forEach(function(e){
            e.style.transform = 'translateX(0)';
            e.style.opacity = '0';
        })
        shower5.forEach(function(e){
            e.style.transform = 'translateX(0)';
            e.style.opacity = '0';
        })
    },700)
    setTimeout(function(){
        // for moving text elements to original position
        tani.forEach(function(element){
            element.style.transform = 'translate(0)';
        })

        // to apply start animation on text elements
        setTimeout(function(){
            comeback1.textillate('start');
            comeback2.textillate('start');
            comeback3.textillate('start');
            comeback4.textillate('start');
            comeback5.textillate('start');
            comeback6.textillate('start');
            comeback7.textillate('start');
            
            onTap(shower);
            onTap(shower2);
            onTap(shower6);
            onTap(shower7);
            onTap(shower8);
            setTimeout(function(){
                onTap(shower3);
            },150)
        },700)
        
        // to apply start animation on icon elements
        run(shower5);
        setTimeout(function(){
            run(shower4);
        },300)
    },800)
}