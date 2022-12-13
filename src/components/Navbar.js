import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() { 
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const navbarAnim = gsap.from('.main-tool-bar', { 
            yPercent: -100,
            paused: true,
            duration: 0.2
          }).progress(1);
          ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
              self.direction === -1 ? navbarAnim.play() : navbarAnim.reverse()
            }
          }); 
    }, []);
         
    return (
        <div className="Navbar">
            <div className='main-tool-bar'>Test</div>
            <div className="scrollable-area"></div>
        </div>
    );
}
