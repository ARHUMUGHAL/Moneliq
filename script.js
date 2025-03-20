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