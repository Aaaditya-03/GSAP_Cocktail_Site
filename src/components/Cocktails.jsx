import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cocktailLists, mockTailLists } from '../../data'

const Cocktails = () => {
    useGSAP(() => {
        const tlCocktails = gsap.timeline({
            scrollTrigger : {
                trigger : '#cocktails',
                start : 'top 30%',
                bottom : 'bottom 70%',
                scrub : true
            }
        });

        tlCocktails
        .from('#c-left-leaf',{x : -100,y:  100} , 0)
        .from('#c-right-leaf' , {x : 100,y : 100,} , 0)
    },[])

  return (
    <section id='cocktails' className ='noisy' >
        <img 
            src='/images/cocktail-left-leaf.png'
            alt = 'left leaf'
            id = 'c-left-leaf' />
        <img 
            src='/images/cocktail-right-leaf.png'
            alt = 'Right leaf'
            id = 'c-right-leaf' />

            <div className= 'list'>
                <div className = 'popular' >
                    <h2>
                        Most Popular Cocktails
                    </h2>

                    <ul>
                        {
                            cocktailLists.map(({name , price , detail ,country}) => (
                                <li key= {name}>
                                    <div className='md:me-28'>
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                        </div>
                                        <span>- {price}</span>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className = 'loved' >
                    <h2>
                        Most Loved Mocktails
                    </h2>

                    <ul>
                        {
                            mockTailLists.map(({name , price , detail ,country}) => (
                                <li key= {name}>
                                    <div className='md:me-28'>
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                        </div>
                                        <span>- {price}</span>
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </div>
        </section>
  )
}

export default Cocktails