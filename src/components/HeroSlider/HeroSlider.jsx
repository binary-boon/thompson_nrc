"use client"


import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import canadianimg from "../../../public/candian-imgs.jpg";
import communityimg from "../../../public/tnrc-capacity-building.jpg";
import familyimg from "../../../public/family-img.jpg"
import wolfimg from "../../../public/tnrc-wolf.jpg"
import grantsFund from "../../../public/grants-fund.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {Autoplay, Navigation , Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSlider() {



  

return(<>
                <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay,Navigation, Pagination]}

        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
    

        className="flex font-Mulish w-[100%] h-screen justify-center   ">
      
        
        

        <SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[80%] md:w-[60%] lg:w-[60%]   bg-gradient-to-r from-[#ff1b6b] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={canadianimg}  alt="canadian image tnrc" />
<div className="flex xs:h-[60%] h-[50%] justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">Community Pride</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
           <ul className=" xs:text-xl  md:text-2xl lg:text-3xl font-bold text-[#f4f269] ">
            <li>
            Cleanliness and Beautification
            </li>

            
            

            <li>
            Neighbourhood Renewal
            </li>

            <li>
            Cultural Programming
            </li>

            <li>
            Promoting of Community and Community Events
            </li>
            
             </ul> 

            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>








<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[70%] bg-gradient-to-r z-10 from-[#3f4d32] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={grantsFund}  alt="canadian image tnrc" />
<div className="flex xs:h-[50%] h-[50%] justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">Small Grants Fund</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
           <ul className=" xs:text-xl  md:text-2xl lg:text-3xl font-bold text-[#f4f269] xs:pr-6 ">
          
            <li className="py-1">
            Cultural events
            </li>

            
            

            <li className="py-1">
            Community gardening projects
            </li>

            <li className="py-1">
            Low income recreational activities
            </li>

            <li className="py-1">
            Community beautification initiatives
            </li>

            <li className="py-1">
            Programs that engage elders and seniors
            </li>

            <li className="py-1">
            Mentorship/Apprenticeship programs for youths
            </li>

            <li className="py-1">
            Programs that help assist in the area of community safety
            </li>
            
            
             
            </ul>
            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>








<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[80%] bg-gradient-to-r z-10 from-[#5cb270] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={familyimg}  alt="canadian image tnrc" />
<div className="flex xs:h-[80%] h-[50%] lg:h-[60%] justify-center lg:justify-between md:justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">Families First</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
           <ul className=" xs:text-xl  md:text-2xl lg:text-3xl font-bold text-[#f4f269] xs:pr-6 ">
          
           <li >
                    Affordable housing
                    </li>

                    
                    

                    <li>
                    Community safety initiatives
                    </li>

                    <li>
                    Youth programming
                    </li>

                    <li>
                    Promoting and raising awareness of issues facing families 
                    </li>
            
            
             
            </ul>
            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>







<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[80%] bg-gradient-to-r z-10 from-[#2c5079] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={communityimg}  alt="canadian image tnrc" />
<div className="flex xs:h-[80%] h-[50%] lg:h-[60%] justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">Capacity Building</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
           <ul className=" xs:text-xl  md:text-2xl lg:text-3xl font-bold text-[#f4f269] xs:pr-6 ">
          
           <li>
                    Capacity Building Initiatives for Not-for-profits
                    </li>

                    
                    

                    <li>
                    Social Enterprises
                    </li>

                    <li>
                    Cultural Programming
                    </li>

                    <li>
                    Charities & Co-ops
                    </li>
            
            
             
            </ul>
            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>







        
      </Swiper>
</>);
}



