import photo from './images/1.jpg';


function Header() {
    return (
        <header>

            <div className="photo">
            <img src={photo} alt="Photo"></img>
            </div>
            <h1>Hello</h1>

        </header>
    );
}

export default Header;
