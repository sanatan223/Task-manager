import '../styles/navbar.css';
import profilePic from '/profile.png';

function Header() {
    return (
        <header className="header">
            <div>App Icon</div>
            <input type="text" placeholder="Search..." className="search-bar" />
            <div className="profile">
                <img className='profile-pic' src={profilePic} alt="Profile" />
            </div>
        </header>
    );
}

export default Header;