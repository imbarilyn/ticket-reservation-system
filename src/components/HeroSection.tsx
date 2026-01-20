import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {useEffect, useRef} from "react";
import  vid2  from '../assets/videos/vid2.mp4';



export function HeroSection() {
    const splitRef = useRef<HTMLDivElement | null>(null);
    const heroRef = useRef<HTMLDivElement | null>(null);


    gsap.registerPlugin(SplitText)
    const split = SplitText.create(document.getElementsByClassName('text'), {
        type: "words"
    })

    // create tween
    gsap.from(split.words, {
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        duration: 0.7,
        ease: "back",
        stagger: 0.15
    })

    useEffect(() => {
        const split = SplitText.create(splitRef.current, {
            type: "words"
        })

        // create tween
        gsap.from(split.words, {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: 0.7,
            ease: "back",
            stagger: 0.15,
            repeat: -1,
            delay: 0.75
        })
    }, []);


    return (
        <div  ref={heroRef} className="relative w-full mt-4  h-[300px] md:h-[450px]">
            <video className="asolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={vid2} type="video/mp4" />
                import vid1 from "../v
                Your browser does not support the video tag.
            </video>
            <div ref={splitRef } className="text-center text-Urbanist absolute top-1/2 text-5xl font-bold -translate-y-1/2 left-1/2 -translate-x-1/2">
                Don’t just watch. Be there where moments become memories. Live events, done right.

            </div>
        </div>
    )
}
