import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {Navbar} from "./components/Navbar.tsx";
import {Hero} from "./components/Hero.tsx";
import {Cocktails} from "./components/Cocktails.tsx";
import {About} from "./components/About.tsx";
import {Art} from "./components/Art.tsx";
import {Menu} from "./components/Menu.tsx";
import {Contact} from "./components/Contact.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
            <Menu/>
            <Contact/>
        </main>
    );
};

export default App;