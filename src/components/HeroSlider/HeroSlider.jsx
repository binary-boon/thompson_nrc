"use client"


import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import canadianimg from "../../../public/candian-imgs.jpg";
import communityimg from "../../../public/tnrc-capacity.jpg";
import familyimg from "../../../public/family-img.jpg"
import wolfimg from "../../../public/tnrc-wolf.jpg"

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
            delay: 2500,
            disableOnInteraction: false,
          }}
    

        className="flex font-Mulish w-[100%] h-screen justify-center  "
      >
        
        

        <SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] bg-gradient-to-r from-[#ff1b6b] "/>

<Image className=" relative block object-fill mix-blend-overlay  "  src={canadianimg}  alt="canadian image tnrc" />
<div className="flex h-[50%] justify-center flex-col absolute top-1/4 left-16 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish text-3xl font-bold py-1 text-white ml-2">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold">Community Pride</h1></div>
            
        
       
            <div className="flex mb-7 ml-2 ">
           <ul className="text-2xl font-extrabold text-[#f4f269] ">
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





<SwiperSlide className="flex justify-center w-[100%] object-fill  ">

<Image className=" relative block object-fill mix-blend-multiply  "  src={wolfimg}  alt="canadian image tnrc" />
<div className="absolute top-1/3 left-10">
    {/* <Card isBlurred className="bg:blur-sm bg-gradient-to-r from-[#12396ba9] to-[#d91ef6a9] pl-5 pt-7 pb-5 pr-6 p-2 "> */}
    <Card isBlurred className="bg:blur-sm bg-gradient-to-r from-[#2a2a15a9] to-[#806532a9] pl-5 pt-7 pb-5 pr-6 p-2 ">
        <CardHeader>
            <div><h2 className=" font-Mulish text-xl py-1 text-[#FFFFFF] font-extrabold]">Celebrating Our Community & Culture</h2>
            <h1 className="text-7xl text-white font-bold">Small Grants Fund</h1></div>
            
            
        </CardHeader>
        <CardBody>
            <div>
           <ul className="text-xl font-bold text-[#F7DF76]">
            <li>
            Cultural events
            </li>

            
            

            <li>
            Community gardening projects
            </li>

            <li>
            Low income recreational activities
            </li>

            <li>
            Community beautification initiatives
            </li>

            <li>
            Programs that engage elders and seniors
            </li>

            <li>
            Mentorship/Apprenticeship programs for youths
            </li>

            <li>
            Programs that help assist in the area of community safety
            </li>
            
            
             </ul> 

            </div>
        

        </CardBody>

        <CardFooter>
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button>
        </CardFooter>
    </Card></div> 

</SwiperSlide>














<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute z-10 h-[100%] w-[50%] bg-gradient-to-r from-[#5cb270] "/>

<Image className=" relative block object-fill    "  src={familyimg}  alt="canadian image tnrc" />
<div className="flex h-[50%] justify-center flex-col absolute top-1/4 left-16 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish text-3xl font-bold py-1 text-white ml-2">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold">Families First</h1></div>
            
        
       
            <div className="flex mb-7 ml-2 ">
           <ul className="text-2xl font-extrabold text-[#f4f269] ">
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







{/* bg-gradient-to-r from-[#f4f269] to-[#5cb270]


        <SwiperSlide className="flex w-[100%]  ">
        <Image className=" relative block object-fill  "  src={familyimg}  alt="family image tnrc" />
        <div className="absolute h-[100%] w-[50%] bg-gradient-to-r from-[#5cb270] "/>
        <div className="absolute top-1/3 left-10">
            <Card isBlurred className="bg:blur-sm  pl-4 py-7 pr-6">
                <CardHeader>
                    <div><h2 className="font-Mulish text-xl font-bold py-1 text-black">The Backbone of a Healthy Community are Healthy Families</h2>
                    <h1 className="text-7xl text-black font-bold  ">Families First</h1></div>
                    
                </CardHeader>
                <CardBody>
                    <div>
                   <ul className="text-xl font-bold">
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
                

                </CardBody>

                <CardFooter>
                <Button className="bg-[#5cb270] font-Mulish text-black font-bold text-xl hover:text-white " variant="flat">
                     Learn More
                  </Button>
                </CardFooter>
            </Card></div> 
        
        
        </SwiperSlide> */}



<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
<div className="absolute h-[100%] w-[50%] bg-gradient-to-r z-10 from-[#9F7D71] "/>

<Image className=" relative block object-fill  "  src={communityimg}  alt="canadian image tnrc" />
<div className="flex h-[50%] justify-center flex-col absolute top-1/4 left-16 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish text-3xl font-bold py-1 text-white ml-2">Leveraging and Supporting our Volunteer Base</h2>
            <h1 className="text-8xl text-[#97384C] font-bold">Capacity Building</h1></div>
            
        
       
            <div className="flex mb-7 ml-2 ">
           <ul className="text-2xl font-extrabold text-[#ffffff] ">
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











        {/* <SwiperSlide className="flex w-[100%] ">
            
            <Image className="block object-fill  mix-blend-overlay" src={communityimg}  alt="community image tnrc" />

            <div className="absolute top-1/3 left-10 w-max">
            <Card isBlurred className="isBlurred bg:blur-sm bg-gradient-to-r from-[#9bf8f4] to-[#6f7bf7] pl-4 py-7 pr-6">
                <CardHeader>
                    <div><h2 className="font-Mulish text-xl font-bold py-2 text-black ml-2">Leveraging and Supporting our Volunteer Base</h2>
                    <h1 className="text-7xl text-black font-bold">Capacity Building</h1></div>
                    
                </CardHeader>
                <CardBody>
                    <div>
                   <ul className="text-xl font-bold">
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
                

                </CardBody>

                <CardFooter>
                <Button className="bg-[#6f7bf7] font-Mulish text-white font-bold text-2xl p-4 hover:text-white" variant="flat">
                     Get in Touch
                  </Button>
                </CardFooter>
            </Card></div> 
        
        
        </SwiperSlide> */}




        <SwiperSlide className="flex justify-center w-[100%] object-fill  ">

<Image className=" relative block object-fill mix-blend-multiply  "  src={canadianimg}  alt="canadian image tnrc" />
<div className="absolute top-1/3 left-10">
    <Card isBlurred className="bg:blur-sm bg-gradient-to-r from-[#12396ba9] to-[#d91ef6a9] pl-5 pt-7 pb-5 pr-6 p-2 ">
        <CardHeader>
            <div><h2 className=" font-Mulish text-xl py-1 text-[#FFFFFF] font-extrabold]">Leveraging and Supporting our Volunteer Base</h2>
            <h1 className="text-7xl text-white font-bold">Community Pride</h1></div>
            
        </CardHeader>
        <CardBody>
            <div>
           <ul className="text-xl font-bold text-[#F7DF76]">

           

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
        

        </CardBody>

        <CardFooter>
        <Button className="bg-[#ffffff] font-Mulish font-bold text-xl hover:text-black hover:bg-[#F7DF76]  " >
             Know More
          </Button>
        </CardFooter>
    </Card></div> 

</SwiperSlide>           




           









        
      </Swiper>
</>);
}




{/* <Card isBlurred className="pl-3 pr-4 p-2">
<CardHeader>
    <div><h2 className="text-xl py-1">Celebrating Our Community & Culture</h2>
    <h1 className="text-7xl">Community Pride</h1></div>
    
</CardHeader>
<CardBody>
    <div>
   <ul className="text-xl">
    <li>
    Cleanliness and beautification
    </li>

    
    

    <li>
    Neighbourhood Renewal
    </li>

    <li>
    Cultural Programming
    </li>

    <li>
    Promoting of community and community events
    </li>
    
     </ul> 

    </div>


</CardBody>

<CardFooter>
<Button color="primary" variant="flat">
     Know More
  </Button>
</CardFooter>
</Card> */}