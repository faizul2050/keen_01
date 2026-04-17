import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import footer_logo from '@/assets/img/KeenKeeper_footer.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-10 px-6 md:px-16 font-sans">
      <div className="container mx-auto">
        {/* Top Section: Logo and Social Links */}
        <div className="flex flex-col justify-between items-center mb-6 space-y-5">
          
          {/* Logo Section - Fixed Warning */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/">
              <Image 
                width={300} 
                height={80} 
                src={footer_logo} 
                alt="KeenKeeper Logo" 
                className="w-auto h-auto" 
              />
            </Link>
            <p className="text-center max-w-md">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-3">Social Links</span>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Visit our Twitter"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Visit our Facebook"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section: Copyright */}
        <div className="text-center text-xs text-gray-400">
          Copyright © 2026 - All right reserved Md Tanvirul Islam
        </div>
      </div>
    </footer>
  );
};

export default Footer;