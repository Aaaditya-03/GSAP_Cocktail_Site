import gsap from 'gsap';
import { useGSAP} from '@gsap/react'
import {SplitText}  from 'gsap/all';
const Hero = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('.title' , {
            type : 'chars , words '
        })

        const paraSplit = new SplitText('.subtitle' , {type : 'lines'})

        titleSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(titleSplit.chars , {
            yPercent : 100,
            stagger : 0.06,
            ease : 'expo.out',
            duration : 1.5,
        })

        gsap.from(paraSplit.lines , {
            opacity : 0,
            duration : 1.8 ,
            ease : 'expo.out',
            stagger : 0.06,
            ypercent : 100,
            delay:1
        })

       const tl= gsap.timeline({
        scrollTrigger : {
            trigger : '#hero',
            scrub : true,
            start : 'top top',
            end : 'bottom top'
        }})

        tl
        .to('.right-leaf' , {y : 200} , 0)
        .to('.left-leaf' , {y : -200} , 0)

    },[]);
  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>
                MOJITO
            </h1>
            <img src='/images/hero-left-leaf.png'
            className='left-leaf'
            alt='Left Leaf' />
            
            <img src='/images/hero-right-leaf.png'
            className='right-leaf'
            alt='Right Leaf' />

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Cool. Crisp. Classic</p>
                        <p className='subtitle'>Sip the Spirit <br /> of Summer</p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle' >
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                        </p>
                        <a href='#cocktails'>View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero