import fb from "../images/FacebookIcon.png"
import twitter from "../images/Twitter Icon.png"
import insta from "../images/Instagram Icon.png"
import git from "../images/GitHub Icon.png"
export default function Footer(){
    return(
        <nav className="nav">
            <img src={twitter} width="25px" height="25px" />
            <img src={fb} width="25px" height="25px" />
            <img src={insta} width="25px" height="25px" />
            <img src={git} width="25px" height="25px" />  
        </nav>
    )
}