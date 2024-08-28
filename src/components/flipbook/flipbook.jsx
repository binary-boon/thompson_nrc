"use client"

import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import Page1 from "../../../public/page-1.jpg"
import Page2 from "../../../public/page-2.jpg"
import Page3 from "../../../public/page-3.jpg"
import Page4 from "../../../public/page-4.jpg"
import Page5 from "../../../public/page-5.jpg"
import Page6 from "../../../public/page-6.jpg"
import Page7 from "../../../public/page-7.jpg"
import Page8 from "../../../public/page-8.jpg"
import Page9 from "../../../public/page-9.jpg"
import Page10 from "../../../public/page-10.jpg"
import Page11 from "../../../public/page-11.jpg"
import Page12 from "../../../public/page-12.jpg"
import Page13 from "../../../public/page-13.jpg"
import Page14 from "../../../public/page-14.jpg"
import Page15 from "../../../public/page-15.jpg"
import Page16 from "../../../public/page-16.jpg"
import Page17 from "../../../public/page-17.jpg"
import Page18 from "../../../public/page-18.jpg"
import Page19 from "../../../public/page-19.jpg"
import Page20 from "../../../public/page-20.jpg"
import Page21 from "../../../public/page-21.jpg"
import Page22 from "../../../public/page-22.jpg"
import Page23 from "../../../public/page-23.jpg"
import Page24 from "../../../public/page-24.jpg"
import Page25 from "../../../public/page-25.jpg"
import { Button } from "@nextui-org/react";


export default function FlipBook() {
  return (  <div className="flex flex-col w-[100%] p-10 justify-center bg-gradient-to-r from-[#0b3866] to-[#e81cff]">
    <div className="flex flex-col w-[100%] justify-center">

        <h1 className="text-[#ffc971] text-6xl font-bold mb-5 text-center">Browse Our Journey</h1>

        <h2 className="font-Mulish mb-12 text-2xl text-center text-white">Swipe Left & Right to View our full AGM Report!</h2>

        </div>

        <div className="flex w-[100%] justify-center rounded-md">

    <HTMLFlipBook width={600} height={800}>
      <div className="demoPage"><Image src={Page1} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page2} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page3} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page4} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page5} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page6} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page7} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page8} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page9} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page10} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page11} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page12} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page13} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page14} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page15} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page16} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page17} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page18} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page19} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page20} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page21} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page22} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page23} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page24} alt="TNRC AGM REPORT"/></div>
      <div className="demoPage"><Image src={Page25} alt="TNRC AGM REPORT"/></div>
     


      
    </HTMLFlipBook></div>

    <div className="flex w-[100] justify-center">
    
    <Button className="text-3xl w-[50%] font-bold bg-[#ffc971] to-[#0b3866] py-7 text-black  " variant="slate">Download PDF</Button>
    </div>
    
    </div>
  );
}