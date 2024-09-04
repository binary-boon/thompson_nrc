import Image from "next/image";
import aboutHero from "../../../public/thompson-nrc-about-us-1.jpg"
import { Button } from "@nextui-org/react";
import Vision from "../../../public/our-vision.png"





export default function About(){
    
    
    return(<div className="flex flex-col w-screen ">

        <div className="relative flex flex-col w-[100%] h-[100vh]  ">
            
            <Image className="absolute object-cover z-0 h-[100vh] " src={aboutHero}  alt="ThompsonNRC About Us "/>




            <div className="flex absolute  top-2/3   flex-row z-10 bg-[#FDB849] w-[95%] ml-10  rounded-md p-4 ">

            <div className="flex flex-col w-[50%] ml-4"> <h1 className="text-8xl font-bold p-4 text-[#3A2A72]">About Us</h1>
                <h3 className="text-3xl p-4">The Thompson Neighbourhood Renewal Corporation (TNRC), established in 2001, has been a leader in community development in Thompson for over fifteen (15) years. <br/> <br/> Every five years our organization engages in a broad based and inclusive consultation process resulting in a renewal plan that guides our operations for that period.

                        </h3>
            </div>



            <div className="flex flex-col w-[50%] "> 
                
             <h2 className="text-3xl p-4">The areas of focus for our current 5-Year Plan (2022-2027) was determined by taking a look at:</h2>

             <ul className=" list-disc text-2xl p-4 ml-4 ">

                <li className="py-1">

                Past work done by the TNRC, and current work done by the other renewal corporations in community development
                </li>

                <li className="py-1">
                Needs of funders
                </li>

                <li className="py-1">
                Gaps in services
                </li>

                <li className="py-1">
                Needs as identified through analysis of Thompson’s economic and social situation through document review
                </li>

                <li className="py-1">
                Needs (overall themes) as identified by interviews and surveys
                </li>



             </ul>

                 </div>

            </div>

        </div>



        <div className="flex w-[100%] mx-3 my-10 mt-52 text-center justify-center "> <h1 className="text-6xl text-center">2022-2027 Areas of Focus</h1></div>



        <div className=" bg-[#FFFFFF] flex flex-col w-[100%] font-Mulish  ">
               
               <div className="absolute  bg-gradient-to-r from-[#3A2A72] to-[#119DA4] w-[70%] h-[100vh] mt-8  "/>
     <div className="flex flex-row w-[100%]  h-screen p-8 justify-center mt-8">
         {/* colordiv */}
            <div className="flex flex-col w-[50%] my-10 mx-3 z-10   ">
            <h1 className="text-[#FDB849] font-extrabold text-8xl">Community Pride</h1>
            <ul className="text-[#E5E5E5]  mx-1 my-5">
            <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold">
                <h2 className="text-2xl py-2">Cleanliness & Beautification</h2>
                <h3 className=" text-lg font-medium" >Ensuring our neighborhoods are clean and visually appealing is at the heart of fostering community pride. By promoting regular clean-ups and beautification projects, we create spaces that residents are proud to call home.</h3>
             </div>
             
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold">
                <h2 className="text-2xl">Neighborhood Renewal</h2>
                <h3 className="text-lg font-medium" >Revitalizing and renewing our neighborhoods strengthens the fabric of our community. Through focused efforts on housing, infrastructure, and public spaces, we aim to enhance the quality of life for all residents.</h3>
             </div>
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold">
                <h2 className="text-2xl">Cultural Programming</h2>
                <h3 className="text-lg font-medium" >Celebrating the rich diversity of our community through cultural events and programs brings us closer together. These initiatives highlight the unique traditions, arts, and heritage that make our neighborhoods vibrant and inclusive.</h3>
             </div>
             <div className="my-1 p-4 hover:bg-stone-100 hover:text-cyan-950 rounded-md hover:font-bold " >
                <h2 className="text-2xl">Promoting of Community & Community Events</h2>
                <h3 className="text-lg font-medium" >Building a strong sense of community is essential to our mission. By promoting local events and encouraging participation, we foster connections among residents and strengthen the bonds that unite us.</h3>
             </div>
             
             
            


            </ul> 
            
            
            
           
            </div>
            
            
            <div className="flex w-[50%] p-8 ml-7 z-10 ">
                <Image  className="flex  w-[auto]" src={Vision} alt="Our Values"/>
            </div>

            </div>

         
          




</div>








    </div>);
}