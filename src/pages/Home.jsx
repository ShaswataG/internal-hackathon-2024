import Intro from "../components/Home/Intro";
import About from '../components/Home/About';
import Services from "../components/Home/Services";
import Newsletter from "../components/Home/Newsletter";

export default function Home() {
    return (
        <>
            <Intro />
            <About />
            <Services />
            <Newsletter />
        </>
    )
}