import { openingHours , socials } from "../../data";
import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger , SplitText);

const Contact = () => {
  useGSAP(() =>{
    const titleSplit = new SplitText('#contact h2',{type : 'words , lines', mask : 'lines'});
    const tlContact = gsap.timeline({
      scrollTrigger : {
        trigger : '#contact',
        start : 'top top',
        scrub: 0.6,
        pin : true
      },
      ease : 'power1.inOut'
    })
    tlContact
        .from(titleSplit.words , {opacity : 0 , y:100 , duration : 0.5 , stagger:0.02})
        .from('#contact h3, #contact p' ,{opacity : 0 , y:100 , stagger : 0.02})
        .fromTo('#f-right-leaf',{y:-100 ,x:100,},{ x:20 , y: -20 ,duration : 1})
        .fromTo('#f-left-leaf',{y:100 ,x:-100} ,{ x: 0, y: 20 ,duration : 1},'>0.5')
        .from('.drink-img' , {y:100 , opacity : 0},'<')
  })

  return (
    <footer id="contact" className='overflow-y-hidden'>

      <img src="/images/footer-left-leaf.png" alt="Left leaf" id='f-left-leaf'/>
      <img src="/images/footer-right-leaf.png" alt="Right leaf"
      id='f-right-leaf' />

      <div className="content ">
        <h2>Where to Find Us</h2>

        <div>
          <h3>VISIT OUR STORE</h3>
          <p className='text-balance'>No.145 ,1st Main, Agos Layout,<br/>
           Rmv 2nd Stage, 
           New Bel Road , Bengaluru, Karnataka 560094 </p>
        </div>

        <div>
          <h3>CONTACT US</h3>
          <p>(123) 987-6543</p>
          <p>hello@Cocktails.com</p>
        </div>

        <div>
          <h3>OPEN EVERY DAY</h3>
          {openingHours.map(({ day, time }) => (
            <p key={time}>
              {day} : {time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <img src={icon} alt={name} />
                {/* <span>{name}</span> */}
              </a>
            ))}
          </div>
          <img src='/images/footer-drinks.png' alt ="drinks" className='drink-img' />
        </div>
      </div>
    </footer>
  );
};

export default Contact;
