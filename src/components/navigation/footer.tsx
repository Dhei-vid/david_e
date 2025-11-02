"use client";

import ButtonX from "../x-ui/button";
import { motion } from "motion/react";
import { Github, Linkedin, LucideIcon, Twitter, Mail } from "lucide-react";

interface SocialMediaLink {
  label: string;
  icon: LucideIcon;
}

const socialMediaLinks: SocialMediaLink[] = [
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Twitter", icon: Twitter },
  { label: "Email", icon: Mail },
];

const Footer = () => {
  const [date] = [new Date()];
  const year = date.getFullYear();

  return (
    <div className="w-full h-[calc(100vh-3rem)] bg-gray-800 dark:bg-gray-100 rounded-4xl">
      <div className="h-full grid grid-row-3 2xl:max-w-7xl mx-auto">
        {/* Main content area - takes up most of the space */}
        <div className="row-span-2 flex-1 flex items-center justify-center p-8 h-full">
          <div className="space-y-6 flex flex-col items-center justify-center text-center max-w-4xl">
            {/* Arrows */}
            <div></div>

            {/* Text */}
            <p className="text-white dark:text-gray-900 font-semibold text-6xl md:text-8xl">
              Let&apos;s{" "}
              <span className="text-glass-500 dark:text-gray-900/50">
                Connect
              </span>
            </p>
            <p className="text-white dark:text-gray-900 text-lg md:text-xl text-gray-300 max-w-2xl">
              Feel free to contact me if you have any questions. I&apos;m
              available for new projects or just for chatting.
            </p>
            <ButtonX size="lg">Contact Me</ButtonX>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="row-span-1 flex flex-row items-center justify-between p-6 border-t border-glass-500 dark:border-gray-900/50 h-full">
          {/* Copyright */}
          <div className="border-y-1 border-glass-500 dark:border-gray-900/50 p-5">
            <p className="text-glass-500 dark:text-gray-900/50 text-sm">
              © {year} David E.
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-4">
            {/* Add your social media icons here */}
            {socialMediaLinks.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1 }}
                className="border border-glass-500 dark:border-gray-900/50 p-2 rounded-full cursor-pointer hover:bg-glass-500 hover:text-gray-700"
              >
                <Icon className="text-glass-500 dark:text-gray-900/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
