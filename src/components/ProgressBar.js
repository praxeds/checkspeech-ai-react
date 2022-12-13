import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProgressBar() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to('progress', {
            value: 100,
            ease: 'none',
            scrollTrigger: { scrub: 0.3 }
          });
    }, []);

    return (
        <progress max="100" value="0"></progress>
    );
}
