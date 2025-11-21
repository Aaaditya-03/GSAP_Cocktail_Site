import gsap from 'gsap';
import { useGSAP} from '@gsap/react'
import { useRef } from 'react';
import {SplitText}  from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
const Hero = () => { 
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth : 768})
    useGSAP(() => {
        const titleSplit =SplitText.create('.title' , {
            type : 'chars , words '
        })

        const paraSplit = SplitText.create('.subtitle' , {type : 'words , lines' , mask : 'lines'})

        titleSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(titleSplit.chars , {
            y : 100,
            stagger : 0.06,
            ease : 'expo.out',
            duration : 1.5,
        })

        gsap.from(paraSplit.lines , {
            opacity : 0,
            duration : 1.6 ,
            ease : 'expo.out',
            stagger : 0.06,
            y : 100,
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
        
        //Start and End values for Responsive design
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue =  isMobile ? '120% top' : 'bottom top';

        const tlVideo = gsap.timeline({
            scrollTrigger:{
                trigger : 'video',
                start : startValue,
                end : endValue,
                pin : true,
                scrub : true, 
            }
        });
        console.log(videoRef);
        //Updating the current time based on video duration
        videoRef.current.onloadedmetadata = () => {
            tlVideo.fromTo(videoRef.current, {
                currentTime : 0,
                scale : 1.5,
                opacity : 0.5
            } , {
                opacity : 1,
                scale: 1,
                currentTime : videoRef.current.duration
            })
        }
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
        <div className='video absolute inset-0'>
            <video
            ref = {videoRef}
            src='/videos/output.mp4'
            muted
            playsInline
            preload='auto'
            />
        </div>
    </>
  )
}

export default Hero