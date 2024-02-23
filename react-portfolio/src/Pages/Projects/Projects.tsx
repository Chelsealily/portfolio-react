import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Calc from "../../Images/calculator.png"
import Tic from "../../Images/tic.png"

const Project = () => { 

    const projects = [
        { id: 1, image_url:(Tic), title: 'Punk API', subtitle: "REACT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 2, image_url:(Tic), title: 'Tic Tac Toe', subtitle: "JAVASCRIPT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 3, image_url:(Tic), title: 'Client Project', subtitle: "REACT", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 4, image_url:(Tic), title: 'Full Stack - Cars', subtitle: "REACT, SQL, JAVA", description:"I built and designed a Tic Tac Toe game in the style of TicTacs, you can play 2 games modes - player vs. player or player vs. compiuter", code_url:"/", preview_url:"/" },
        { id: 5, image_url:(Calc), title: 'Hangman', subtitle: "JAVA", description:"This was my first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
        { id: 6, image_url:(Calc), title: 'Calculator', subtitle: "JAVASCRIPT", description:"This was my first ever project using JavaScript/TypeScript. I created a functioning calculator with 3 easter eggs on values Infinity, 22 and 69.", code_url:"/", preview_url:"/" },
    ];

return (
    <section>
      
      <CardList projects={projects}/>
      <Footer/>
  </section>
  )
}

export default Project;