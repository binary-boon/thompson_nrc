

import Image from "next/image";
import blogimg from "../../../public/blog-img.jpg"

import BarChart from "../BarChart/BarChart.jsx"
import { Button } from "@nextui-org/react";
import mural from "../../../public/culture-2.jpg"
import jewel from "../../../public/jewel.jpg"
import wolfie from "../../../public/wolf.jpg"
import waterfall from "../../../public/waterfall.png"
import asian from "../../../public/asian.jpg"
import elder from "../../../public/elder.jpg"











export default function BlogIntro() {




        return(<div className="flex font-Mulish flex-col align-middle justify-center w-[100%] mt-48 ">
                        <div className="flex flex-col w-[100%] text-center justify-center mb-24">
                        <h1 className=" text-6xl text-[#0b3866] font-extrabold mt-5 mb-6 text-center  ">Community Insights</h1>
                        <h3 className="font-Mulish text-black text-3xl"> From local success stories to practical advice, our articles connect you with the heart of our community journey.</h3>

                        </div>
                        <div className=" flex flex-row w-[100%]   justify-center  ">
                <div className="flex align-middle justify-center flex-row w-[80%]">

            <div className=" relative flex flex-col w-1/3">
                    <Image className="rounded-md" src={mural} height={350} width={350} alt="blog img"/>
                    <div className="absolute bottom-0 transition ease-in-out delay-150 text-center rounded-md p-1 bg-[#113F6B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-[350px]">
                    <h1 className="text-[#B1EDE8] mb-1 font-bold ">Vibrant Thompson</h1>
                    <h3 className="text-white">Bringing Walls to Life: A Community Mural Campaign
                    </h3>
                    <Button className="bg-white text-black mt-5 font-bold mb-2">Read More</Button>

                    </div>

            </div>

            <div className=" relative flex flex-col w-1/3">
                    <Image className="rounded-md" src={wolfie} height={350} width={350} alt="blog img"/>
                    <div className="absolute bottom-0 transition ease-in-out delay-150 text-center rounded-md p-1 bg-[#113F6B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-[350px]">
                    <h1 className="text-[#B1EDE8] mb-1 font-bold">Explore the North</h1>
                    <h3 className="text-white">Thompson - The Hub in the North. Tap into the uncharted scenic beauty of Manitoba.</h3>
                    <Button className="bg-white text-black mt-5 font-bold mb-2">Read More</Button>

                    </div>

            </div>

            <div className=" relative flex flex-col w-1/3">
                    <Image className="rounded-md" src={elder} height={350} width={350} alt="blog img"/>
                    <div className="absolute w-[350px]  justify-center  bottom-0 transition ease-in-out delay-150 text-center rounded-md p-1 bg-[#113F6B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                    <h1 className="text-[#B1EDE8] mb-1 font-bold">Elder Abuse</h1>
                    <h3 className="text-white">Recognizing and Preventing Elder Abuse: Protecting Our Seniors
                    </h3>
                    <Button className="bg-white text-black mt-5 font-bold mb-2">Read More</Button>

                    </div>

            </div>

            <div className=" relative flex flex-col w-1/3">
                    <Image className="rounded-md" src={jewel} height={350} width={350} alt="blog img"/>
                    <div className="absolute  bottom-0 transition ease-in-out delay-150 text-center rounded-md p-1 bg-[#113F6B] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-[350px]">
                    <h1 className="text-[#B1EDE8] mb-1 font-bold">TNRC Presents</h1>
                    <h3 className="text-white">Celebrating Local Artists, Artisans, and Crafters at the Small Business Expo</h3>
                    <Button className="bg-white text-black mt-5 font-bold mb-2">Read More</Button>

                    </div>

            </div>

            

            </div>

            </div>

            <div>

                <div className=" flex flex-col h-full w-[100%] mt-48">
                    <div className="flex flex-col justify-center w-[100%] text-center ">
                    <h1 className="text-6xl font-Mulish font-extrabold text-[#0b3866]">AGM Report</h1>

                    <h2 className="text-xl mt-3 mb-12 ">Explore the key highlights and accomplishments from our Annual General Meeting 2023-2024. <br/>The AGM Report offers insights into our progress, financials, and future plans for building stronger communities.</h2>
                    </div>
                  
                
                </div>

            </div>




        </div>);


}