import photo from './images/3.jpg';


function Header() {
    return (
        <header>

            <div className="profile">
                <img src={photo} alt="Photo" width="100%" height="100%"></img>
                <h2>Hossein Ghafouri</h2>
                <p>Front-end Developer</p>
                <a href='http://hossein.tech/'><p>hossein.tech</p></a>
                <div className='social_profile'>
                    <button><i class="bi bi-envelope-fill"></i>Email</button>
                    <button><i class="bi bi-github"></i>Github</button>
                </div>
            </div>

        </header>
    );
}

export default Header;
