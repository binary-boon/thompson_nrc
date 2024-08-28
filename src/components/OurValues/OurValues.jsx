"use client"
import { GoLaw } from "react-icons/go";
import { GiTeamIdea } from "react-icons/gi";
import { BsHouseHeartFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";





export default function OurValues(){

    return(
    
    <div className=" font-Mulish flex flex-col w-[100%] m-5 mt-20 p-10">
        

        <div className="flex flex-row w-[100%] justify-center my-5">

            <div className="flex w-[50%] font-Mulish font-extrabold justify-center text-8xl"><h1>Our Values</h1></div>

            <div className="flex w-[50%]  "><h2 className="font-Mulish justify-center text-2xl mr-5 pr-2 text-left">We are committed to fostering a thriving, inclusive community where empowerment, collaboration, and cultural awareness drive meaningful change. These core principles shape our mission and inspire us to build a better, brighter future for all.</h2></div>

        </div>



        <div className="flex flex-row w-[100%] mt-48 mr-5">

            <div className="flex justify-center flex-col w-1/3  text-center">
                <div className="flex justify-center "> <div className="bg-[#0C3967] rounded-full h-fit w-fit p-5"><GoLaw fill="#FFFFFF" size={90}/></div></div>
                <h2 className="font-Mulish font-bold text-xl py-2">Advocacy</h2>
                <h1 className="font-Mulish text-[#0C3967] font-bold text-3xl py-2">Voice for Change</h1>
                <h3 className="font-Mulish font-medium text-2xl py-2 px-7">Championing the rights and voices of our community to influence positive change.</h3>
            </div>



            <div className="flex justify-center flex-col w-1/3  text-center">
                <div className="flex justify-center "> <div className="bg-[#FFD23F] rounded-full h-fit w-fit p-5"><GiTeamIdea fill="#000000" size={90}/></div></div>
                <h2 className="font-Mulish font-bold text-xl py-2">Collaboration & Partnerships</h2>
                <h1 className="font-Mulish text-[#0C3967] font-bold text-3xl py-2">Voice for Change</h1>
                <h3 className="font-Mulish font-medium text-2xl py-2 px-7">Building strong alliances to achieve common goals and amplify our impact.</h3>
            </div>

            <div className="flex justify-center flex-col w-1/3  text-center">
                <div className="flex justify-center "> <div className="bg-[#89023E] rounded-full h-fit w-fit p-5"><BsHouseHeartFill fill="#FFFFFF" size={90}/></div></div>
                <h2 className="font-Mulish font-bold text-xl py-2">Neighborhood Improvement</h2>
                <h1 className="font-Mulish text-[#0C3967] font-bold text-3xl py-2">Enhancing Communities</h1>
                <h3 className="font-Mulish font-medium text-2xl py-2 px-7">Enhancing the physical and social fabric of our communities for a better quality of life.</h3>
            </div>

            

            


        </div>




        <div className="flex flex-row w-[100%] mt-20 mr-5">

<div className="flex justify-center flex-col w-1/3  text-center">
    <div className="flex justify-center "> <div className="bg-[#310A31] rounded-full h-fit w-fit p-5"><FaPeopleCarryBox fill="#FFFFFF" size={90}/></div></div>
    <h2 className="font-Mulish font-bold text-xl py-2">Reducing Marginalization</h2>
    <h1 className="font-Mulish text-[#0C3967] font-bold text-3xl py-2">Inclusive Opportunities</h1>
    <h3 className="font-Mulish font-medium text-2xl py-2 px-7">Working to ensure inclusivity and equal opportunities for all community members.</h3>
</div>



<div className="flex justify-center flex-col w-1/3  text-center">
    <div className="flex justify-center "> <div className="bg-[#F8C0C8] rounded-full h-fit w-fit p-5"><FaPeopleRoof fill="#00000" size={90}/></div></div>
    <h2 className="font-Mulish font-bold text-xl py-2">Cultural Awareness & Acceptance</h2>
    <h1 className="font-Mulish text-[#0C3967] font-bold text-3xl py-2">Embrace Diversity</h1>
    <h3 className="font-Mulish font-medium text-2xl py-2 px-7">Promoting understanding and appreciation of the diverse cultures within our neighborhood.</h3>
</div>

<div className="flex justify-center flex-col w-1/3  text-center">
    <div className="flex justify-center "> <div className="bg-[#606C38] rounded-full h-fit w-fit p-5"><FaMoneyBillTrendUp fill="#FFFFFF" size={90}/></div></div>
    <h2 className="font-Mulish font-bold text-xl py-2">Economic Development</h2>
    <h1 className="font-Mulish text-[#0C3967] font-bold text-3xl py-2 ">Growth & Prosperity</h1>
    <h3 className="font-Mulish font-medium text-2xl py-2 px-7">Driving growth and prosperity through sustainable local economic initiatives.</h3>
</div>






</div>







    </div>);
}