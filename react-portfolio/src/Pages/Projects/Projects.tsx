import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Calc from "../../Images/calculator.png"
import Tic from "../../Images/tic.png"
import Pokemon from "../../Images/pokemon.png"
import Punk from "../../Images/punk.png"
import Weth from "../../Images/weather.png"
import Hangman from "../../Images/hangman.png"
import Cars from "../../Images/cars.png"
import Tick from "../../Images/tick.png"
import Client from "../../Images/client.png"
import "./Projects.scss"

const Project = () => { 

    const projects = [
        { id: 1, image_url:(Punk), title: 'Punk API', subtitle: "REACT", description:"I built and designed a web app to show the Punk Brewery beers from their API, with my website you can filter through and search your favourite beers", code_url:"https://github.com/Chelsealily/punk-api-project", preview_url:"https://chelsealily.github.io/punk-api-project/" },
        { id: 2, image_url:(Tic), title: 'Tic Tac Toe', subtitle: "JAVASCRIPT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. computer", code_url:"https://github.com/Chelsealily/tictactoe-project", preview_url:"https://chelsealily.github.io/tictactoe-project/" },
        { id: 3, image_url:(Client), title: 'Client Project', subtitle: "REACT", description:"I worked on a client project with 11 others for 2 weeks where I also acted as Product owner for 3 days. It was a great learning curve and we built a fantastic app.", code_url:"https://github.com/nology-tech/verde-client-project", preview_url:"https://github.com/nology-tech/verde-client-project" },
        { id: 4, image_url:(Weth), title: 'Weather App', subtitle: "REACT", description:"This was a personal project using React TS where I created a functioning to weather app connected to an API so that I could check the weather depending on yout GPS location. I also added a to-do list where you can add, check and delete a task!", code_url:"https://github.com/Chelsealily/weather-app", preview_url:"https://chelsealily.github.io/weather-app/" },
        { id: 5, image_url:(Cars), title: 'Full Stack - Cars', subtitle: "REACT, JAVA", description:"I built and designed a Full stack App where I could Add, update and delete my favourite cars. This was a fun project where I could show off all of my skills.", code_url:"https://github.com/Chelsealily/full-stack-project", preview_url:"https://github.com/Chelsealily/full-stack-project" },
        { id: 6, image_url:(Tick), title: 'Ticket Tracker', subtitle: "REACT", description:"This was one of my earlier REACT TS projects where I created a functioning ticket tracker so that each employee could track their own tickets", code_url:"https://github.com/Chelsealily/ticket-tracker", preview_url:"https://chelsealily.github.io/ticket-tracker/" },
        { id: 7, image_url:(Pokemon), title: 'Pokemon', subtitle: "JAVASCRIPT", description:"This was my first ever technical timed test project using React TS and an API. I rendered a list of 150 cards from an API to show various pokemon characters", code_url:"https://github.com/Chelsealily/pokedom-index", preview_url:"https://chelsealily.github.io/pokedom-index/" },
        { id: 8, image_url:(Hangman), title: 'Hangman', subtitle: "JAVA", description:"This was my first ever project using Java where I created a functioning Hangman game where you have 10 lives before you are hanged!", code_url:"https://github.com/Chelsealily/java-hangman", preview_url:"https://github.com/Chelsealily/java-hangman" },
        { id: 9, image_url:(Calc), title: 'Calculator', subtitle: "JAVASCRIPT", description:"My first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"https://github.com/Chelsealily/calculator-project", preview_url:"https://chelsealily.github.io/calculator-project/" },
    ];

return (
    <section>
      <p className="desc">{"> Check out some of the projects that I've created!"}</p>
      <CardList projects={projects}/>
      <Footer/>
  </section>
  )
}

export default Project;