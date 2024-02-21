import "../Header/Header.scss"
import profile from "../../Images/profile.png"
import heading from "../../Images/heading.png"

const Header = () => {
    return (
        <div className="header">
     <img src={heading} className="header__text" alt= "header text - london UK based software engineer"></img>
      <img src={profile} className="header__pic" alt="profile picture - chelsea li face smiling"></img>
     </div>
     
     )

}


    export default Header;