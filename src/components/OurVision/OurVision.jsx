
"use client"

import Image from "next/image"
import Vision from "../../../public/our-vision-wolf.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

import {Button} from "@nextui-org/react";






export default function OurVision () {

    return(

<div className="flex xs:flex-col md:flex-row lg:flex-row w-[100%] justify-center m-5 mt-36 p-10 xs:ml-2 md:ml-10 lg:ml-10 mr-5 mb-20">

    <div className="flex flex-col xs:w-[100%] md:w-[70%] lg:w-[70%] ">


            



    
        <div className="flex flex-col">
                <h1 className="text-7xl font-extrabold text-[#0b3866]">Our Vision</h1>
                <h3 className="text-2xl text-left mt-4 ">We are dedicated to fostering growth, unity, and pride within neighborhoods,<br/> ensuring a brighter, more inclusive future for all.</h3>
                <Button className="bg-gradient-to-r from-[#0b3866] to-[#e81cff] text-white w-fit p-4 rounded-lg  text-xl font-bold mt-5 mb-3">Programs & Projects</Button>
        </div>

        <div className="flex flex-col">


        <div className=" flex xs:flex-row md:flex-row lg:flex-row group my-1 hover:bg-gradient-to-r from-[#0b3866] to-[#e81cff] hover:text-white xs:w-[100%]  md:w-fit lg:w-fit rounded-md xs:p-5 md:p-5 lg:p-5 ">
            <div className="flex flex-col">
        <h2 className="text-2xl py-2 font-extrabold">Small Grants Fund</h2>

        <h3 className="text-xl font-light md:pr-7 lg:pr-7 xs:pr-0 xs:mr-4" >A catalyst for local innovation, enabling grassroots projects that make a meaningful impact in the neighborhood.</h3>

        </div>

        <div className="flex flex-col justify-end ml-7 "><FaArrowRightLong className="group-hover:fill-[#FFFF] xs:mt-4" fill="#e81cff" size={30}/> </div>
                </div>

    
        <div className=" flex flex-row my-1 group hover:bg-gradient-to-r from-[#0b3866] to-[#e81cff] hover:text-white w-fit rounded-md p-5 ">
            <div className="flex flex-col">
        <h2 className="text-2xl py-2 font-extrabold">Community Pride</h2>

        <h3 className="text-xl font-light pr-7 xs:mb-4" >A neighborhood where residents take pride in their community identity and actively contribute to its growth.</h3>

        </div>

        <div className="flex flex-col justify-end ml-7 "><FaArrowRightLong className="group-hover:fill-[#FFFF] " fill="#e81cff" size={30}/> </div>
                </div>



                







                <div className=" flex flex-row group my-1 hover:bg-gradient-to-r from-[#0b3866] to-[#e81cff] hover:text-white w-fit rounded-md p-5 ">
            <div className="flex flex-col">
        <h2 className="text-2xl py-2 font-extrabold">Families First</h2>

        <h3 className="text-xl font-light pr-7" >A supportive environment where families are prioritized, nurtured, and empowered to thrive.</h3>

        </div>

        <div className="flex flex-col justify-end ml-7"><FaArrowRightLong className="group-hover:fill-[#FFFF]" fill="#e81cff" size={30}/> </div>
                </div>


                <div className=" flex group flex-row my-1 hover:bg-gradient-to-r from-[#0b3866] to-[#e81cff] hover:text-white w-fit rounded-md p-5 ">
            <div className="flex flex-col">
        <h2 className="text-2xl py-2 font-extrabold">Capacity Building</h2>

        <h3 className="text-xl font-light pr-7" >A community equipped with the skills, knowledge and resources needed for <br/> sustainable development and self-reliance.</h3>

        </div>

        <div className="flex flex-col justify-end ml-7"><FaArrowRightLong className="group-hover:fill-[#FFFF]" fill="#e81cff" size={30}/> </div>
                </div>

                
               

        
            
            </div>




        </div>




        <div className="flex flex-col xs:w-[100%] md:w-[30%] lg:w-[30%]  justify-center  xs:mt-8  ">

                    <Image className="block object-fill" src={Vision} alt="vision image tnrc"/>

        </div>



    
    
    
    </div>


);
                
                
           



}