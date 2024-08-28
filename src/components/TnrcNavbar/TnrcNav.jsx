"use client"
import React, { useRef } from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger,NavbarMenu, NavbarMenuToggle,NavbarMenuItem, Dropdown, DropdownMenu} from "@nextui-org/react";
// import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import TNRCLogo from "../../../public/tnrc-logo-320.png";
import Image from "next/image.js";
import { IoIosArrowDown } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { RiFundsBoxFill } from "react-icons/ri";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { MdFamilyRestroom } from "react-icons/md";
import AcmeLogo from "../../../public/tnrc-logo-320.png";

import { useState } from "react";



export default function TnrcNav() {
  // const icons = {
  //   chevron: <ChevronDown fill="currentColor" size={16} />,
  //   scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  //   lock: <Lock className="text-success" fill="currentColor" size={30} />,
  //   activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  //   flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  //   server: <Server className="text-success" fill="currentColor" size={30} />,
  //   user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  // };




  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];



  const [isOpen, setIsOpen] = useState(false);

  // const [isOpen, setIsOpen] = useState(()=>{

  //   if(Events){
  //     return true;
  //   }

    
  //     return true;
    


  // });

   const [isEvent ,setEvent]=useState(false);
  





  return (
    <Navbar isBlurred onMenuOpenChange={`${setIsMenuOpen}  ${setEvent}`} className="relative z-50  bg-[#FFFFFF] w-[95%]  " height={"19ch"}>
      <NavbarContent className="w-[100%] " >
        
        <NavbarBrand className="  w-[176px] " >
          <Image src={TNRCLogo} height={400} width={346} alt="tnrc nav logo" />
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" font-Mulish font-bold hidden ml-8  sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link className=" text-[#372A6E] text-xl"  href="#">
            Home
          </Link>
        </NavbarItem>


        <Dropdown  isOpen={isEvent} className="bg-[#372A6E]">
        <NavbarItem>
          <DropdownTrigger  onMouseEnter={() => {
            
              setEvent(true);
            }}
            >

           <div className="flex flex-row"> <Link className="text-[#372A6E] font-bold text-xl cursor-pointer">Events</Link> <IoIosArrowDown className="mt-1" size={25}/></div> 
            
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu onMouseLeave={() => {
              setEvent(false);
            }}  className= "w-[340px] text-[#FFFFFF] ">

        <DropdownItem className="hover:bg-[#B1EDE8] text-[#FFFFFF]">
          Upcoming Events
        </DropdownItem>

        <DropdownItem className="hover:bg-[#B1EDE8] text-[#FFFFFF]">
          Calendar
        </DropdownItem>

        

        </DropdownMenu>
        </Dropdown>




        <NavbarItem isActive>
          <Link className=" text-[#372A6E] font-bold text-xl" href="#" >
            About Us
          </Link>
        </NavbarItem>
        
        <Dropdown isOpen={isOpen} className="bg-[#372A6E]">
        <NavbarItem>
          <DropdownTrigger onMouseEnter={() => {
              setIsOpen(true);
            }}
            >

           <div className="flex flex-row cursor-pointer"> <Link className="text-[#372A6E] font-bold text-xl">Programs & Projects</Link> <IoIosArrowDown className="mt-1" size={25}/></div> 
            
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu onMouseLeave={() => {
              setIsOpen(false);
            }} className= "w-[340px] text-[#FFFFFF] ">

        <DropdownItem className="hover:bg-[#B1EDE8] text-[#FFFFFF]">
          Capacity Building
        </DropdownItem>

        <DropdownItem className="text-[#FFFFFF]">
          Community Pride
        </DropdownItem>

        <DropdownItem className="text-[#FFFFFF]">
          Small Grants Fund
        </DropdownItem>

        </DropdownMenu>
        </Dropdown>


        <NavbarItem>
          <Link className="text-[#372A6E] text-xl" href="#">
            Blog
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-[#372A6E] text-xl"   href="#">
            Contact US
          </Link>
        </NavbarItem>

        

      </NavbarContent>

      <NavbarContent className="ml-16 mr-9" justify="end" >
            <a href="https://www.facebook.com/profile.php?id=100090357615922">
        <FaFacebookSquare className="cursor-pointer bg-[#0C3967] rounded-md"  fill="#FDB849"  size={30} />
        </a>
        

        <a href="https://www.instagram.com/thompsonnrc_/">
        <FaInstagramSquare className="cursor-pointer bg-[#0C3967] rounded-md"    fill="#FDB849" size={30} />
        </a>

        <a href="https://x.com/Thompsonnrc_?mx=2">
        <FaSquareXTwitter  className="cursor-pointer bg-[#0C3967] rounded-md"  fill="#FDB849" size={30} />
        </a>

        

        </NavbarContent>
      
      <NavbarMenu className="my-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
    </Navbar>

  );
}







{/* <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar> */}

























// export default function TnrcNav() {
//   const icons = {
//     chevron: <ChevronDown fill="currentColor" size={16} />,
//     scale: <Scale className="text-warning" fill="currentColor" size={30} />,
//     lock: <Lock className="text-success" fill="currentColor" size={30} />,
//     activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
//     flash: <Flash className="text-primary" fill="currentColor" size={30} />,
//     server: <Server className="text-success" fill="currentColor" size={30} />,
//     user: <TagUser className="text-danger" fill="currentColor" size={30} />,
//   };




//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];





//   return (
//     <Navbar height={"4 rem"} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}  
//      >
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//       </NavbarContent>

//       <NavbarBrand >
//         <Image src={AcmeLogo} height={160} width={138} alt="Thompson Nrc Logo"/>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//       <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//       <NavbarItem>
//           <Link color="foreground" href="#">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             About
//           </Link>
//         </NavbarItem>
//         <Dropdown>
//           <NavbarItem>
//             <DropdownTrigger>
//               <Button
//                 disableRipple
//                 className="p-0 bg-transparent data-[hover=true]:bg-transparent"
//                 endContent={icons.chevron}
//                 radius="sm"
//                 variant="light"
//               >
//                 Events
//               </Button>
//             </DropdownTrigger>
//           </NavbarItem>
//           <DropdownMenu
//             aria-label="Events Label"
//             className="w-[340px]"
//             itemClasses={{
//               base: "gap-4",
//             }}
//           >
//             <DropdownItem
//               key="our-events"
//               description="Discover upcoming activities and gatherings in your neighborhood."
//               startContent={<MdEventNote className="text-warning" fill="currentColor" size={20}/>}
//             >
//               Our Events
//             </DropdownItem>

//             <DropdownItem
//               key="browse-callendar"
//               description="View the full schedule of events and mark your calendar."
//               startContent={<MdEventNote className="text-warning" fill="currentColor" size={20}/>}
//             >
//               Browse Callendar
//             </DropdownItem>
            
//           </DropdownMenu>
//         </Dropdown>

//         <Dropdown>
//           <NavbarItem>
//             <DropdownTrigger>
//               <Button
//                 disableRipple
//                 className="p-0 bg-transparent data-[hover=true]:bg-transparent"
//                 endContent={icons.chevron}
//                 radius="sm"
//                 variant="light"
//               >
//                 Programs & Projects
//               </Button>
//             </DropdownTrigger>
//           </NavbarItem>
//           <DropdownMenu
//             aria-label="ACME features"
//             className="w-[340px]"
//             itemClasses={{
//               base: "gap-4",
//             }}
//           >
//             <DropdownItem
//               key="autoscaling"
//               description="Empower your community with skills and resources for sustainable growth."
//               startContent={<MdOutlineReduceCapacity size={30}/>}
//             >
//               Capacity Building
//             </DropdownItem>
//             <DropdownItem
//               key="usage_metrics"
//               description="Celebrate and enhance the unique identity of your neighborhood."
//               startContent={<RiCommunityFill size={30}/>}
//             >
//               Community Pride
//             </DropdownItem>
//             <DropdownItem
//               key="production_ready"
//               description="Access funding to support local projects and initiatives."
//               startContent={<RiFundsBoxFill size={30}/>}
//             >
//               Small Grants Fund
//             </DropdownItem>
//             <DropdownItem
//               key="99_uptime"
//               description="Strengthening families through support, resources, and community engagement."
//               startContent={<MdFamilyRestroom size={30}/>}
//             >
//               Families First
//             </DropdownItem>
            
//           </DropdownMenu>
//         </Dropdown>


//         <NavbarItem >
//           <Link href="#" aria-current="page">
//            Blog
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Contact Us
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#"><FaFacebookSquare size={30}/></Link>
//         </NavbarItem>
//         <NavbarItem>
//         <Link href="#"><FaSquareInstagram size={30}/></Link>
//         </NavbarItem>
//         <NavbarItem>
//         <Link href="#"><IoLogoLinkedin size={32}/></Link>
//         </NavbarItem>
//         <NavbarItem>
//         <Link href="#"><FaSquareXTwitter size={30}/></Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu >
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>


//     </Navbar>
//   );
// }
