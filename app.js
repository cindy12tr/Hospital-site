const overlay=document.querySelector('.page-overlay')
const header=document.querySelector('.header')
const navigation=document.querySelector('.navigation')
const navItems=document.querySelectorAll('.nav-item')
const sections=document.querySelectorAll('.section')
const lines=document.querySelectorAll('.line')

const tl=gsap.timeline({defaults: {duration: 1}})
const controller=new ScrollMagic.Controller()

    tl.fromTo(overlay, {x:0}, {x:'100%'})
    tl.fromTo(lines, {opacity:0,scaleY:0}, {opacity:1,scaleY:1})
    tl.fromTo(header,{opacity:0,y:-50},{opacity:1,y:0},'-=1')
    tl.fromTo(navigation,{opacity:0,y:-60},{opacity:1,y:0},'-=1')
    tl.fromTo(navItems,{opacity:0,y:-60},{opacity:1,y:0,stagger: 0.10},'-=1.3')
    
    const scrollAnimations = () =>{
        sections.forEach((section) => {
            const tl = gsap.timeline({defaults: {duration: 1}})
            tl.fromTo(section, {opacity: 0, y: -50, scale: 0}, {opacity: 1, y:0, scale: 1})
    
            //scroll magci scene
            let scene = new ScrollMagic.Scene({
                triggerElement: section,
                triggerHook: 1,
                reverse: false
            })
            .setTween(tl)
          //  .addIndicators({colorStart: 'white', colorTrigger: 'white'})
            .addTo(controller)
        })
    }
    
    scrollAnimations()