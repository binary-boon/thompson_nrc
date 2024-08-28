"use client";
import React, { useRef } from "react";
import { animate, inView, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion";

type AnimatedCounter ={
  from:number,
  to:number,
  animatedOptions?:KeyframeOptions
}


const AnimatedCounter=({from,to,animatedOptions}:AnimatedCounter)=>{
  
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref,{once:true});

  useIsomorphicLayoutEffect(()=>{
    const element = ref.current;

    if(!element) return;
    if(!inView) return;

    const controls = animate(from , to , {

      duration:1.5,
      ease:"easeOut",
      ...animatedOptions,
      onUpdate(value){
              element.textContent=value.toFixed(0);
      }


    })

    return ()=>{
      controls.stop();
    }

  },[ref ,inView, from , to])

  return(<span ref={ref} />
  )
    

           
  



    
}

export default AnimatedCounter;