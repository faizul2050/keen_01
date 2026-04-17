'use client'
import logo from '@/assets/img/KeenKeeper.png'
import Image from "next/image";
import MyLink from "./MyLink";
import Link from 'next/link';

import { IoMdHome, IoMdTime } from 'react-icons/io';
import { BsGraphUp } from 'react-icons/bs';

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <IoMdHome />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <IoMdTime />
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <BsGraphUp />
    },
  ];

  return (
    <nav className="shadow">
      <div className="flex flex-wrap justify-center lg:justify-between 
      gap-5 items-center lg:py-5 py-4 container mx-auto px-4">
        
        {/* Logo Section - Fixed Aspect Ratio Warning */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="KeenKeeper"
              width={200}
              height={50}
              className="w-auto h-auto" 
              priority 
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div>
          <ul className="flex justify-between gap-8 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <MyLink href={item.path} className="flex items-center gap-2">
                  {item.icon} <span>{item.text}</span>
                </MyLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;