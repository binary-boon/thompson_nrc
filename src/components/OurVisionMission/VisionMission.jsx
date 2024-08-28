import React from "react";

import Image from "next/image";
import Vision from "../../../public/our-vision.png"
import Mission from "../../../public/mission.jpg"
import groupi from "../../../public/tnrc-grp.jpg"
import {Button, ButtonGroup} from "@nextui-org/react";

{/* <div className="  flex  w-[70%] h-[100%] bg-[#14213D] "> */}

export default function VisionMission(){


    return(
          <div className=" bg-[#FFFFFF] flex flex-col w-[100%] font-Mulish ">
               
               <div className="absolute  bg-gradient-to-r from-[#0b3866] to-[#B1EDE8] w-[70%] h-[100vh] mt-8  "/>
     <div className="flex flex-row w-[100%]  h-screen p-8 justify-center mt-8">
         {/* colordiv */}
            <div className="flex flex-col w-[50%] my-10 mx-3 z-10   ">
            <h1 className="text-[#B1EDE8] font-extrabold text-8xl">Our Values</h1>
            <ul className="text-[#E5E5E5]  mx-1 my-5">
            <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold">
                <h2 className="text-2xl py-2">Advocacy</h2>
                <h3 className=" text-lg font-medium" >Championing the rights and voices of our community to influence positive change.</h3>
             </div>
             
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold">
                <h2 className="text-2xl">Collaboration & Partnerships</h2>
                <h3 className="text-lg font-medium" >Building strong alliances to achieve common goals and amplify our impact.</h3>
             </div>
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold">
                <h2 className="text-2xl">Neighborhood Improvement</h2>
                <h3 className="text-lg font-medium" >Enhancing the physical and social fabric of our communities for a better quality of life.</h3>
             </div>
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold " >
                <h2 className="text-2xl">Reducing Marginalization</h2>
                <h3 className="text-lg font-medium" >Working to ensure inclusivity and equal opportunities for all community members.</h3>
             </div>
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold" >
                <h2 className="text-2xl">Cultural Awareness & Acceptance</h2>
                <h3 className="text-lg font-medium" >Promoting understanding and appreciation of the diverse cultures within our neighborhood.</h3>
             </div>
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold" >
                <h2 className="text-2xl">Economic Development</h2>
                <h3 className="text-lg font-medium" >Driving growth and prosperity through sustainable local economic initiatives.</h3>
             </div>
             
            


            </ul> 
            
            <Button  className=" bg-white font-extrabold text-xl p-3 w-[70%]  ml-2"variant="flat">About US</Button>
            
           
            </div>
            
            
            <div className="flex w-[50%] p-8 ml-7 z-10 ">
                <Image  className="flex  w-[auto]" src={Vision} alt="Our Values"/>
            </div>

            </div>

         
          
{/* 
            
<div className="flex flex-row w-[100%] h-screen p-8 justify-center">

<div className="flex w-[50%] p-8 ml-7 z-10 ">
    <Image  className="flex  w-[auto]" src={Mission} alt="Our Values"/>
</div>

<div className="flex flex-end flex-col w-[50%] my-10  z-10 ">
<h1 className="text-[#FDB849] text-7xl">Our Vision</h1>
<h2 className="text-white text-lg my-2">Working with the community to promote a place of empowerment to influence positive change.</h2>
<ul className="text-white  mx-1 my-7">
<div className="my-1">
    <h2 className="text-2xl py-2">Community Pride</h2>
    <h3 className="text-lg font-light" >A neighborhood where residents take pride in their community’s identity and actively contribute to its growth.</h3>
 </div>
 <div className="my-1 py-2" >
    <h2 className="text-2xl">Families First</h2>
    <h3 className="text-lg font-light" >A supportive environment where families are prioritized, nurtured, and empowered to thrive.</h3>
 </div>
 <div className="my-1 py-2">
    <h2 className="text-2xl">Capacity Building</h2>
    <h3 className="text-lg font-light" >A community equipped with the skills, knowledge, and resources needed for sustainable development and self-reliance.</h3>
 </div>
 <div className="my-1 py-2">
    <h2 className="text-2xl">Small Grants Fund</h2>
    <h3 className="text-lg font-light" >A catalyst for local innovation, enabling grassroots projects that make a meaningful impact in the neighborhood.</h3>
 </div>
 


</ul>


<Button className="bg-white mt-10 w-[50%] justify-center font-extrabold text-xl p-3"variant="flat">About US</Button>

</div>




<div className="absolute  bg-[#37246F] w-[80%]  h-[95vh] mb-8 right-0 "/>


</div> */}



</div>


        

    )
}
