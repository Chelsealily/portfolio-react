import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Calc from "../../Images/calculator.png"
import Tic from "../../Images/tic.png"
import Pokemon from "../../Images/pokemon.png"
import Punk from "../../Images/punk.png"
import Todo from "../../Images/todo.png"
import Hangman from "../../Images/hangman.png"
import Cars from "../../Images/cars.png"
import Tick from "../../Images/tick.png"
import Client from "../../Images/client.png"
import "./Projects.scss"

const Project = () => { 

    const projects = [
        { id: 1, image_url:(Punk), title: 'Punk API', subtitle: "REACT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 2, image_url:(Tic), title: 'Tic Tac Toe', subtitle: "JAVASCRIPT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. computer", code_url:"/", preview_url:"/" },
        { id: 3, image_url:(Client), title: 'Client Project', subtitle: "REACT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 4, image_url:(Cars), title: 'Full Stack - Cars', subtitle: "REACT, JAVA", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 8, image_url:(Tick), title: 'Ticket Tracker', subtitle: "REACT", description:"This was my first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
        { id: 6, image_url:(Pokemon), title: 'Pokemon', subtitle: "JAVASCRIPT", description:"This was my first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
        { id: 7, image_url:(Todo), title: 'To do List', subtitle: "REACT", description:"This was my first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
        { id: 8, image_url:(Hangman), title: 'Hangman', subtitle: "JAVA", description:"This was my first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
        { id: 9, image_url:(Calc), title: 'Calculator', subtitle: "JAVASCRIPT", description:"My first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
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