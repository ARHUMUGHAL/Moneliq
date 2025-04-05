function NavlogoAnimation() {
    const h1 = document.querySelector('.navbar h1')

    const h1Text = h1.textContent.split('')

    var clutter = ''

    h1Text.forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    h1.innerHTML = clutter

    gsap.from('.navbar h1 span', {
        y: '100%',
        duration: .5,
        stagger: .1
    })
}

NavlogoAnimation()

const leftNavlink = document.querySelectorAll('.navbar .left-nav ul li')

gsap.from(leftNavlink, {
    y: '-200%',
    duration: 1,
    stagger: 0.18,
    opacity: 0
})

const rightNavlink = document.querySelectorAll('.navbar .right-nav ul li')

gsap.from(rightNavlink, {
    y: '-200%',
    duration: 1,
    stagger: -0.18,
    opacity: 0
})

function dropdownAnimation() {
    const li = document.querySelector('.left-nav ul li:nth-child(1)')
    const dropdown = document.querySelector('.dropdown')

    const dropDownAnimation = gsap.timeline({ paused: true })

    dropDownAnimation.to(dropdown, {
        maxHeight: 600,
        duration: 1,
        opacity: 1,
        pointerEvents: 'all'
    })

    li.addEventListener('mouseenter', () => {
        dropDownAnimation.play()
    })
    dropdown.addEventListener('mouseleave', () => {
        dropDownAnimation.reverse()
    })

}

dropdownAnimation()


function toggleMenuAnimation(){
    const hamburgerMenu = document.querySelector('.navbar .hamburger-menu')
const toggleMenu = document.querySelector('.toggle-menu')
const span = document.querySelectorAll('.navbar .hamburger-menu span')

const toggleAnimate = gsap.timeline({paused : true})

toggleAnimate.to(toggleMenu,{
    x : "-100%",
    duration : 1,
})

const spanAnimate = gsap.timeline({paused : true})

spanAnimate.to(span[0],{
    y : 10,
    rotation : 45,
    duration : 1
}, 'a')
.to(span[1],{
    y : 8,
    rotation : 45,
    duration : .2,
    opacity : 0
}, 'a')
.to(span[2],{
    y : -10,
    rotation : -45,
    duration : 1
}, 'a')

let isMenuOpen = false

hamburgerMenu.addEventListener('click',()=>{
    if(isMenuOpen){
        toggleAnimate.reverse()
        spanAnimate.reverse()
    }
    else{
        toggleAnimate.play()
        spanAnimate.play()
    }
    isMenuOpen = !isMenuOpen
})
}

toggleMenuAnimation()


function heroboxAnimation(){

    const heroH1 = document.querySelector('.black h1')
    const heroH1Text = heroH1.textContent.split(' ')
    const heroBtnText = document.querySelector('.black .hero-content a').textContent
    

    var storeHeroH1Word = ''
    heroH1Text.forEach(function(elem){
        storeHeroH1Word += `<span>${elem}</span>`
    })
    heroH1.innerHTML = storeHeroH1Word

    let heroAnimation = gsap.timeline()

    heroAnimation.from('.black',{
        y : '80%',
        duration : 1.5,
        ease : Power4,
    },'a')

    heroAnimation.from('.black h1 span',{
        y : '100%',
        duration : 1.5,
        ease : Power4,
        stagger : 0.15,
        opacity : 0
    },'a')

    heroAnimation.from('.black p',{
        opacity : 0,
        delay : 0.8
    },'a')
    heroAnimation.to('.black .hero-content a',{
        width: '250px',
        opacity : 1,
        delay : 0.8
    },'a')
    heroAnimation.from('.hero-dashboard-image',{
        y : '80%',
        duration : 1,
        delay : 1
    },'a')
    heroAnimation.from('.hero-bottom',{
        y : '50%',
        opacity : 0,
        duration : 1
    })

}
heroboxAnimation()
