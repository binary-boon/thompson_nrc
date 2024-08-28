import Image from "next/image";
import TnrcNav from "../components/TnrcNavbar/TnrcNav.jsx"
import HeroSlider from "../components/HeroSlider/HeroSlider.jsx"
import VisionMission from "../components/OurVisionMission/VisionMission.jsx"
import InfoCards from "../components/InfoCards/InfoCards.jsx"
import TickerCards from "../components/TickerCards/TickerCards.jsx"
import BrandsLogoSlider from "../components/BrandsLogoSlider/BrandsLogoSlider.jsx"
import OurValues from "../components/OurValues/OurValues.jsx"
import OurVision from "../components/OurVision/OurVision.jsx"
import BlogIntro from "../components/blogintro/BlogIntro.jsx"
import BarChart from "../components/BarChart/BarChart.jsx"
import HomeChart from "../components/charts/HomeChart.jsx"
import FlipBook from "../components/flipbook/flipbook.jsx"



export default function Home() {
  return (
    <>
    <HeroSlider/>
    <TickerCards/>
    
    <OurValues/>

    <OurVision/>



   

    <VisionMission/>

    <BrandsLogoSlider/>
    <InfoCards/>

    


      

    <BlogIntro/>
  
    <HomeChart/>
    
    <FlipBook/>
    

    </>
  );
}
