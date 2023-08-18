import Photo from '../images/Shankar.jpg'
export default function Header(){
    return(
        <header>
        <img src={Photo} width="317px" height="317px" id="photo"/>
        </header>
    );
}