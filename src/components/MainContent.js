import Email from "../images/Button.png"
import Linkedin from "../images/Button (1).png"
export default function MainContent(){
    return(
    <div id="container">
       <div id="info">
       <h1 id="name">Shankar</h1>
       <h3 id="role">Frontend Developer</h3>
       <div id="buttons">
       <img src={Email} width="115px" height="34px" id="email"/>
       <img src={Linkedin} width="115px" height="34px" id="linkedin"/>
       </div>
       <h1>About</h1>
       <h3>I am Shankar.....Waiting for an opportunity to prove myself with my problem solving amd coding skills and I am a quick learner and a hard worker
Best way to success is to think and implement the plans and learn skills needed to achieve your goal repeatedly with patience until you reach the heights...........</h3>
       <h1>Interests</h1>
       <h3>Listening Audio books,Food expert,Music listening,Learning new skills,Interacting with strangers.</h3>
       </div>
    </div>

    );
}