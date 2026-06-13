import '../styles/navbar.css';
import profilePic from '/profile.png';
import { themeColors } from '../constants/colors';

function Header() {
    return (
        <header className="header" style={{
            backgroundColor: themeColors.dark.sectionBg,
            boxShadow: `0 1px 4px ${themeColors.dark.textPrimary}`
        }}>
            <div>App Icon</div>
            <input type="text" placeholder="Search..." className="search-bar" style={{
                backgroundColor: themeColors.dark.textPrimary,
                borderColor: themeColors.dark.textPrimary
            }} />
            <div className="profile">
                <img className='profile-pic' src={profilePic} alt="Profile" />
            </div>
        </header>
    );
}

export default Header;