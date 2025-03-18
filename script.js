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

gsap.from(leftNavlink,{
    y:'-200%',
    duration : 1,
    stagger : 0.18,
    opacity : 0
})

const rightNavlink = document.querySelectorAll('.navbar .right-nav ul li')

gsap.from(rightNavlink,{
    y:'-200%',
    duration : 1,
    stagger : -0.18,
    opacity : 0
})


