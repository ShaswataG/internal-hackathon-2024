import FamilyImage from '../../assets/home/homePageFamily.svg';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    const navigate = useNavigate();
    return (
        <div className="intro">
            <section className="hero">
                <div className="hero-content">
                <h3>Best Hospitals Near You</h3>
                <h1>Making Healthcare Easier</h1>
                <p>Best Healthcare for you and your family</p>
                <div className="buttons">
                    <button onClick={() => {navigate('/login')}} className="sign-in">Sign In</button>
                    <button onClick={() => {navigate('/register')}} className="register">Register</button>
                </div>
                </div>
                <div className="hero-image">
                <img src={FamilyImage} alt="Family Healthcare" />
                </div>
            </section>
        </div>
    )
}