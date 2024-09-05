"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Button, ButtonGroup} from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react';
import Image from "next/image";
import cfimg from "../../../public/culture-1.jpg"
import blogimg from "../../../public/blog-img.jpg";
import workimg from "../../../public/workshop-img.png";
import basketball from "../../../public/basketball.jpg"
import mural from "../../../public/culture-2.jpg"
import shop from "../../../public/shop-1.png"
import artist from "../../../public/artist-1.jpg"
import summer from "../../../public/summer-1.jpg"
import social from "../../../public/social-enter.jpg"


import { FreeMode, Pagination } from 'swiper/modules';

export default function InfoCards() {
        return(
        <>
        <div className="flex flex-col justify-center text-center my-6 mt-48 mb-24 ">

                <h1 className="text-[#0b3866] xs:text-5xl md:text-6xl lg:text-6xl font-bold mb-5">Community Bulletin Board</h1>
                <h2 className="font-Mulish text-black xs:px-4 xs:text-2xl  md:text-3xl lg:text-3xl  ">Stay informed and connected with the latest news, events, and initiatives from Thompson Neighborhood Renewal Corporation.</h2>

        </div>


        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 80 },
            480: { slidesPerView: 3, spaceBetween: 150 },
            768: { slidesPerView: 3, spaceBetween: 50 },
            1024: { slidesPerView: 4, spaceBetween: 100 },
          }}


        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="flex w-[100%] flex-row h-fit mb-28 justify-center"
      >
        <SwiperSlide className="w-max">
            <Card className=" bg-gradient-to-t from-[#0b3866] to-[#e81cff] p-4 justify-center">
            <CardHeader>
                <Image className="w-auto object-cover rounded-lg"  src={cfimg} height={299} width={299} alt="blog image" />
            </CardHeader>

            <CardBody>
                <h2 className="text-white">
                Discover the vibrant essence of our community through Culture Fusion, where Cultural Arts & Crafts come alive alongside Traditional Exhibits. </h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-[white] text-[#2b3bcc] font-extrabold">Read More</Button>

            </CardFooter>
            </Card>
            
            </SwiperSlide>
        <SwiperSlide className="w-max pl-2" >

        <Card className=" bg-gradient-to-t from-[#0b3866] to-[#e81cff] p-4 justify-center ">
            <CardHeader>
                <Image className="w-auto object-cover rounded-lg" src={workimg} height={299} width={299}  alt="blog image" />
            </CardHeader>

            <CardBody>
                <h2 className="text-white">
                Empower your future with our Capacity Building initiative, where we focus on Asset Building and smart Budgeting strategies. 
                </h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white text-[#2b3bcc] font-extrabold">Read More</Button>

            </CardFooter>
            </Card>

        </SwiperSlide>



        <SwiperSlide className="w-max">
            
        <Card className="  bg-gradient-to-t from-[#0b3866] to-[#e81cff] p-4 justify-center">
            <CardHeader>
                <Image className="w-auto object-cover rounded-lg" src={shop} height={299} width={299} alt="blog image" />
            </CardHeader>

            <CardBody>
                <h2 className="text-white">
                Thompson Neighborhood Renewal Cooperation celebrates local Artists, Artisans and Crafters at the 13th Small Business Expo.
                </h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white text-[#2b3bcc] font-extrabold">Read More</Button>

            </CardFooter>
            </Card>

        </SwiperSlide>
        <SwiperSlide className="w-max">

        <Card className="  bg-gradient-to-t from-[#0b3866] to-[#e81cff] p-4 justify-center">
            <CardHeader>
                <Image className="w-auto object-cover rounded-lg" src={summer} height={299} width={299}  alt="blog image" />
            </CardHeader>

            <CardBody>
                <h2 className="text-white">
                Vibrant Thompson - Murals are a way to not only showcase Northern culture and our environment, but they help beautify our City.
                </h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white text-[#2b3bcc] font-extrabold">Read More</Button>

            </CardFooter>
            </Card>


        </SwiperSlide>
        <SwiperSlide className="w-max">

        <Card className="  bg-gradient-to-t from-[#0b3866] to-[#e81cff] p-4 justify-center">
            <CardHeader>
                <Image className="w-auto object-cover rounded-lg" src={social} height={299} width={299} alt="blog image" />
            </CardHeader>

            <CardBody>
                <h2 className="text-white">
                 Social Enterprise - A viable option for non-profit and for-profit organizations to fund thier mission of providing impactful solutions to social challenges.
                </h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white text-[#2b3bcc] font-extrabold">Read More</Button>

            </CardFooter>
            </Card>


        </SwiperSlide>
        <SwiperSlide className="w-max">

        <Card className=" bg-gradient-to-t from-[#0b3866] to-[#e81cff] p-4 justify-center">
            <CardHeader>
                <Image className="w-auto object-cover rounded-lg" src={workimg} height={299} width={299}  alt="blog image" />
            </CardHeader>

            <CardBody>
                <h2 className="text-white">
                Empower your future with our Capacity Building initiative, where we focus on Asset Building and smart Budgeting strategies.
                </h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white text-[#2b3bcc] font-extrabold">Read More</Button>

            </CardFooter>
            </Card>

        </SwiperSlide>
        
      </Swiper>

      

      </>);

}