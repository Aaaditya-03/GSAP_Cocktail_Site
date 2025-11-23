import { useState, useRef } from "react";
import { allCocktails } from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = allCocktails.length;

  useGSAP(() => {

    //  gsap.fromTo('#menu-heading' , {opacity :0, y:'100%'} ,{opacity : 1, y:0,duration:1, ease:'power1.inOut'})
      gsap.fromTo("#title", { opactiy: 0 }, { opacity: 1 ,duration:1})
      gsap.fromTo(".cocktail img", { opacity: 0, x: '-200%' },{ opacity: 1, x: '0%' ,duration:1,ease:'power1.inOut'})
      gsap.fromTo(".details  h2",{ y:'100%', opacity: 0 },{ y: '0%', opacity: 1 ,ease :'power1.inOut'})
      gsap.fromTo(".details p",{ y:'100%', opacity: 0 },{ y: '0%', opacity: 1,ease:'power1.inOut'});
  }, [currentIndex]);

  function goToSlide(index) {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  }

  function getCocktailsAt(indexOffset) {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  }
  const currentCocktail = getCocktailsAt(0);
  const nextCocktail = getCocktailsAt(1);
  const prevCocktail = getCocktailsAt(-1);

  return (
    <section id="menu" className='overflow-y-hidden noisy'>
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />

      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aris-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left mb-3"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt="Cocktail image"
            className="object-contain"
          />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p> Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
