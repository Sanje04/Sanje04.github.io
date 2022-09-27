import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/newportfolio.png'
import IMG2 from '../../assets/youtubeplayer.png'
import IMG3 from '../../assets/imagesearch.jpg'
import IMG4 from '../../assets/geesesweeper.jpg'
import IMG5 from '../../assets/incometax.jpg'
import IMG6 from '../../assets/typeracer.png'
import IMG7 from '../../assets/trivia.png'
import IMG8 from '../../assets/shop.jpg'
import IMG9 from '../../assets/oldportfolio.png'

const data = [
  {
    id: 1,
    title: "Portfolio",
    img: IMG1,
    link: "https://github.com/Sanje04/react-portfolio-new-website"
  },
  {
    id: 2,
    title: "YouTube Player",
    img: IMG2,
    link: "https://github.com/Sanje04/VideosReactApp"
  },
  {
    id: 3,
    title: "Image Search",
    img: IMG3,
    link: "https://github.com/Sanje04/PictureReactApp"
  },
  {
    id: 4,
    title: "Geese Sweeper",
    img: IMG4,
    link: "https://github.com/Sanje04/Geese-Spotter"
  },
  {
    id: 5,
    title: "Income Tax Tool",
    img: IMG5,
    link: "https://github.com/Sanje04/Income-Tax-Tool"
  },
  {
    id: 6,
    title: "Type Racer",
    img: IMG6,
    link: "https://github.com/Sanje04/Java-Type-Racing-Game"
  },
  {
    id: 7,
    title: "Trivia",
    img: IMG7,
    link: "https://github.com/Sanje04/TriviaGame"
  },
  {
    id: 8,
    title: "Online Shop",
    img: IMG8,
    link: "https://github.com/Sanje04/Online-Store"
  },
  {
    id: 9,
    title: "Old Portfolio",
    img: IMG9,
    link: "https://github.com/Sanje04/SanjePortfolio"
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, img, title, github}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img} alt={title}/>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>Github</a>
                
              </div>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio