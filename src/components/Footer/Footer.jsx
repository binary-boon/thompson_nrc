import Tnrclogo from "../../../public/tnrc-logo-320.png"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

import { IoIosMail } from "react-icons/io";


export default function Footer(){
    return(
            <div className="flex flex-col w-[100%] p-8 z-20 mt-80">
            <div className="flex w-[100%] my-5"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4491.476243019197!2d-97.843248!3d55.745679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x525fc6709046f7d7%3A0x6c56faac2a21b723!2sThompson%20Neighbourhood%20Renewal%20Corporation!5e0!3m2!1sen!2sus!4v1724167232519!5m2!1sen!2sus" width="100%" height="450"  allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>

        <div className="flex xs:flex-col  md:flex-row lg:flex-row w-[100%] bg-[#FFFF] justify-between p-3 ">
        <div className="flex xs:flex-col md:flex-row lg:flex-row text-white w-[1/3]">
           <div className="flex "> <Image src={Tnrclogo} width={276} height={320} alt="tnrc logo" /></div>
            <div className="flex ml-4 flex-col text-white w-[1/3]">
            <h2 className="text-[#0b3866] text-2xl mt-6 font-bold xs:mb-4 md:mb-0 lg:mb-0">Thompson Neighbourhood Renewal Corporation</h2>
            <h3 className="text-black text-xl">Unit B – 117 Commercial Place, Thompson MB R8N 1T1 <br/>

                 P: 204-677-0760 <br/>

                F: 204-677-2247  <br/>

                www.thompsonnrc.ca 
                </h3>
                </div>
        </div>

        <div className="flex flex-col text-black w-[1/3] xs:mt-8 md:mt-0 lg:mt-0">

        <ul>
            <h2 className="font-Mulish font-bold text-[#0b3866] mb-4 text-xl">Quick Links</h2>

        <li>
        <Link href="#">Home</Link>
        </li>

        <li>
        <Link href="#">Events</Link>
        </li>

        <li>
        <Link href="#">Programms & Projects</Link>
        </li>

        <li>
        <Link href="#">Blog</Link>
        </li>

        <li>
        <Link href="#">Contact Us</Link>
        </li>

        

        </ul>

        </div>

        <div className="flex font-Mulish flex-col text-white w-[1/3]  xs:mt-8 md:mt-0 lg:mt-0">

        <ul className="text-black">
            <h2 className="text-[#0b3866] font-bold mb-4 text-xl">Legals</h2>

        <li>
        <Link href="#">Cookie Policy</Link>
        </li>

        <li>
        <Link href="#">Privacy Policy</Link>
        </li>

        <li>
        <Link href="#">Terms of Service</Link>
        </li>

        <li>
        <Link href="#">Home</Link>
        </li>

        

        </ul>

        </div>




        </div>

        <div className="w-[100%] flex flex-row justify-center mx-4 p-5 ">
        <a href="https://www.facebook.com/profile.php?id=100090357615922" target="_blank">
        <FaFacebookSquare className="mx-4 fill-[#0C3967]" size={30} />
        </a>
        
        <a href="https://www.linkedin.com/company/thompson-neighborhood-renewal-corporation/" target="_blank">
        <IoLogoLinkedin className="mx-4 fill-[#310A31] " size={35} />
        </a>

            <a href="https://www.instagram.com/thompsonnrc_/" target="_blank">
        <FaSquareInstagram className="mx-4 fill-[#ff768a]" size={30} />
        </a>

        <a href="https://x.com/Thompsonnrc_" target="_blank">
        <FaSquareXTwitter className="mx-4 fill-black" size={30}/>
        </a>

        <a href="mailto:admin@tnrc.ca" target="_blank">
        <IoIosMail className="mx-4 fill-[#FFD23F]"  size={35} />
        </a>

        </div>

        <div className="flex w-[100%] justify-center ">
            <h1 className="text-black">Thompson Neighbourhood Renewal Corporation© All rights reserved Copyrights 2024</h1>
        </div>

        <div className="flex w-[100%] justify-center  ">
            <h1 className="text-[#0b3866] font-Mulish font-extrabold font-3xl py-1">Developed by Quintasel </h1>
        </div>
        
        </div>
    );
}