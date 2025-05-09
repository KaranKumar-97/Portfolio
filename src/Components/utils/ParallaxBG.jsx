import { useRef, useEffect, ReactNode } from "react";
import BG from "../../../public/assets/BG.jpg?url";
import BGFront from "../../../public/assets/Front.png?url";
import BGFront2 from "../../../public/assets/Front2.png?url";
import Wallpaper1 from "../../../public/assets/wallpaper1.jpg?url";
import Wallpaper2 from "../../../public/assets/wallpaper2.jpg?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBG(props)
{

    const headingRef = useRef(null);
    const BGFront2Ref = useRef(null);
    const BGFrontRef = useRef(null);

    const centerDiv = useRef(null);

    const mainDiv = useRef(null);
    
    useEffect(() => {        
        let ctx = gsap.context(() => {
            gsap.to(
                centerDiv.current,{
                    // width:"10vw",
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"-1% 0%",
                        end:"bottom -100%",
                        scrub:true,
                        // markers:true
                    }
                }
            )

            gsap.fromTo(
                headingRef.current,{
                    y:50,
                },
                {
                    y:-300,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"30% 45%",
                        end:"60% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                BGFrontRef.current,{
                    yPercent:0
                },
                {
                    yPercent:-20,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                BGFront2Ref.current,{
                    yPercent:0
                },
                {
                    yPercent:-30,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            );
            
            //intro
            gsap.from(mainDiv.current,
                {
                    opacity:0,
                    ease: "power4.out",
                    duration:4,
                },
            );
            [BGFrontRef,BGFront2Ref].forEach((ref,index)=>{
                gsap.from(ref.current,
                    {
                        y:-200,
                        ease: "power4.out",
                        duration:4,
                        delay:.2*index
                    },
                )
            })
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);

    return (
        <>
            {/* <link rel="prefetch" href={BG} /> */}
            <div className="overflow-x-clip flex justify-center ">
                <div ref={mainDiv} className="flex w-max gap-4 items-end">
                    {/* <div className="h-[70vh] w-[50vw] border-2 border-white/20 rounded-2xl">
                        <img className="w-full h-full object-cover rounded-2xl" src="assets/BG.jpg" alt="" />
                        <video src={video} className="w-full h-full object-cover rounded-2xl" autoPlay muted loop/> */}
                    </div> 
                    <div ref={centerDiv} className='relative flex h-screen w-screen flex-col justify-center items-center overflow-clip  border-white/20 rounded-b-2xl'>
                        {/* <img className='absolute top-0 w-full h-full object-cover' src={BG} alt="" />
                        <img ref={BGFront2Ref} className='hidden md:block absolute top-0 w-full h-full object-cover' src="assets/BG.jpg" alt="" /> */}
                        {/* <div className='hidden md:block absolute top-0 w-full h-full' ref={BGFrontRef}>
                            <img className='w-full h-full object-cover' src="assets/BG.jpg" alt="" />
                            <div className="h-96 bg-background"></div>
                        </div> */}
                        {/* <div className="h-screen w-full bg-background/50 pointer-events-none absolute top-0 left-0"></div> */}
                        <div className='' ref={headingRef}>
                            {props.children}
                        </div>
                    </div>
                    {/* <div className="h-[70vh] w-[50vw] border-2 border-white/20 rounded-2xl">
                        <img className="w-full h-full object-cover rounded-2xl" src={Wallpaper2} alt="" />
                    </div> */}
                </div>
            {/* </div> */}
        </>
    )
}