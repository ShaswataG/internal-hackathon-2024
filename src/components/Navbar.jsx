import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    
    
    return (
        <>
            <header>
                <nav className="navbar">
                    <div onClick={() => { navigate('/') }} className="logo">MediAssist</div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className='navbar--login-button'><a href="/login">Login</a></li>
                        <li><button onClick={() => { navigate('/register') }} className="join-button">Join Us</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
};
