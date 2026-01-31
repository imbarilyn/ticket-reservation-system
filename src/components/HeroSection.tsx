import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {useEffect, useRef} from "react";
// import  vid2  from '../assets/videos/vid2.mp4';
import HeroImage from '../assets/images/hero8.jpg';



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
        <div  ref={heroRef} className="relative w-full  h-[150px] md:h-[450px]">
            <div className="absolute inset-0">
                <img src={HeroImage} className="h-full w-full object-cover"/>
            </div>
            <div className="absolute bottom-0  pb-4 ps-4 md:pb-10  md:ps-32">
                <button className="cursor-pointer btn-ghost btn-sm bg-linear-to-r  from-supernova-rose-500 to-pumpkin-500 md:px-4 px-3 py-0.5 md:py-2 rounded-xl">
                    <span className="text-white text-sm  font-bold">Sell Event</span>
                </button>
            </div>
        </div>
    )
}