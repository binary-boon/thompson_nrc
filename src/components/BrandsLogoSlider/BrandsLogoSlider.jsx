"use client"

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Logo1 from "../../../public/logo-1.png"
import Logo2 from "../../../public/logo-2.png"
import Logo3 from "../../../public/logo-3.png"
import Logo4 from "../../../public/logo-4.png"
import logo5 from "../../../public/babies-logo.png"
import Image from "next/image";



export default function BrandsLogoSlider(){

return(

<div className="flex flex-col w-[100%] h-full justify-center mt-48 my-5">

    <div className=" flex flex-col text-center p-5 w-[100%]">
  <h1 className="text-[#0b3866] justify-center font-extrabold xs:text-5xl md:text-6xl lg:text-6xl   ">Affiliated Organizations</h1>

  <h2 className="text-black xs:text-2xl md:text-3xl lg:text-3xl mt-5">All the organizations that are Active Towards Our Cause</h2> 
  </div>

<Swiper
            spaceBetween={0}
            loop={true}
            centeredSlides={true} 
            
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={6}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 80 },
              480: { slidesPerView: 3, spaceBetween: 150 },
              768: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 6, spaceBetween: 150 },
            }}
            modules={[Autoplay]}
            className="flex  flex-row w-[100%]"
          >
            <SwiperSlide><Image src={Logo1} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image src={Logo2} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image src={Logo3} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image src={Logo4} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image className="mt-16" src={logo5} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image src={Logo1} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image src={Logo2} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image src={Logo3} height={250} width={250} alt="logo image"/></SwiperSlide>
            <SwiperSlide><Image className="mt-16" src={logo5} height={250} width={250} alt="logo image"/></SwiperSlide>


            
            
          </Swiper>



          </div>);
  
 
}








// const links = [Logo1,Logo2,Logo3,Logo4,Logo1,Logo2,Logo3]

// const linkss = ["../../../public/logo-1.png","../../../public/logo-2.png", "../../../public/logo-3.png","../../../public/logo-4.png"]

//   return(<AppContainer>

//       <Wrapper>

//           <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliqu</Text>

//           <Note> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi voluptatibus consequatur harum cupiditate odio, nesciunt vero excepturi labore</Note>

//           <Marquee>

//             <MarqueeGroup>


//               {

//                   linkss.map(el=>{
//                     <ImageGroup>

//                         <Image className="flex" src={el} width={250} height={250} alt="images"/>

//                     </ImageGroup>
//                   })


//               }

//             </MarqueeGroup>

//           </Marquee>

//       </Wrapper>


//   </AppContainer>);











// const AppContainer = styled.div`
// width:100vw;
// height:100vh;
// colour:#00000;
// position:relative;
// display:flex;
// align-items:center;
// justify-content:center;

// `;


// const Wrapper = styled.div`
// width:100%
// height:fit-content;
// display:flex;
// align-items:center;
//   justify-content:center;
//   flex-direction:column;
// `;

// const Text = styled.h1`
// font-size: 1.5em;
// text-align: center;
// color: #BF4F74;
// `;

// const Note = styled.h1`
// font-size:18px;
// font-weight:200;
// margin-bottom:40px;
// color:#BF4F74;

// `;


// const Marquee = styled.div`
// display:flex;
// width:100%;
// user-select:none; 
// `

// const MarqueeGroup = styled.div`

// flex-shrink:0;
// display:flex;
// align-items:center;
// justify-content:space-around;
// white-space:nowrap;
// width:100%;
// `



// const ImageGroup = styled.div`

// display:grid;
// place-items:center;

// padding:calc(clamp(10rem, 1rem+40vmin, 30rem)/10);
// height:100%;
// width:100%;
// `


// const Image = styled.img`

// object-fit:contain;
// width:100%;
// height:100%;
// border-radius:0.5rem;
// aspect-ratio:16/9;
// padding: 5px 20px;


// `





