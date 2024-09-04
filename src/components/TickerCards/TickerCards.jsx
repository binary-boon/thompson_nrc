"use client"
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import { Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react';
import { Button } from "@nextui-org/react";


export default function TickerCards(){

return (
<div className="flex flex-row w-[100] justify-center bg-white p-5 rounded-sm ">

        <Card className="flex font-Mulish flex-col p-3 m-2 bg-[#FDB849] text-black w-[30%] mx-3">
            <CardHeader className="text-5xl font-bold">
            <AnimatedCounter  from={0} to={15}/> <span>+</span>

            </CardHeader>

            <CardBody>

                <h1 className="font-Mulish  text-xl py-2 font-extrabold text-[#37246F]"> YEARS OF COMMUNITY SERVICE</h1>

                <h2 className="">Building a sense of community by supporting and promoting Thompson culture, heralding good news stories and initiatives, and plan and support initiatives that enhance community spaces for all community members.</h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white font-bold hover:bg-[#372A6E] hover:text-white" href={"#"}>Learn More</Button>
            </CardFooter>

        </Card>



        <Card className="flex flex-col p-3 m-2 bg-[#FDB849] text-black w-[30%]">
            <CardHeader className="text-5xl font-bold">
            <AnimatedCounter from={0} to={148}/> <span>+</span>

            </CardHeader>

            <CardBody>

                <h1 className="font-Mulish font-extrabold text-xl py-2 text-[#37246F]">Families Supported</h1>

                <h2>Support and promote programs and initiatives that spread awareness and provide services on matters relating to healthy families, safety and well-being of the community.</h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white font-bold hover:bg-[#372A6E] hover:text-white" href={"#"}>Learn More</Button>
            </CardFooter>

        </Card>




        <Card className="flex flex-col p-3 m-2 bg-[#FDB849] text-black w-[30%]">
            <CardHeader className="text-5xl font-bold">
            <AnimatedCounter from={0} to={500}/> <span>,000$</span>

            </CardHeader>

            <CardBody>

                <h1 className="font-Mulish  text-xl py-2 font-extrabold text-[#37246F]">Worth of Grants Provided </h1>

                <h2>Provide workshops and other support to not-for-profits, charities, social enterprises, co-ops, and other community groups that will help them achieve their goals.</h2>

            </CardBody>

            <CardFooter>
                <Button className="bg-white font-bold hover:bg-[#372A6E] hover:text-white" href={"#"}>Learn More</Button>
            </CardFooter>

        </Card>





</div>)

}