"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

import { Github, Linkedin, LucideIcon, Twitter, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

interface SocialMediaLink {
  label: string;
  icon: LucideIcon;
}

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (() => setMounted(true))();
  }, []);

  // useEffect(() => {
  //   function handlePointerDown(e: PointerEvent) {
  //     if (wrapperRef.current && e.composedPath().includes(wrapperRef.current)) {
  //       return;
  //     }
  //     // Otherwise close
  //     setIsOn(false);
  //   }

  //   document.addEventListener("pointerdown", handlePointerDown);
  //   return () => {
  //     document.removeEventListener("pointerdown", handlePointerDown);
  //   };
  // }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  const socialMediaLinks: SocialMediaLink[] = [
    { label: "GitHub", icon: Github },
    { label: "LinkedIn", icon: Linkedin },
    { label: "Twitter", icon: Twitter },
    { label: "Email", icon: Mail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="!z-40 bg-red-300 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              David.E
            </Link>
          </div>

          <div className="flex flex-row gap-4 items-center">
            {mounted && <ThemeToggle />}
            <div className="relative">
              <motion.button
                layout
                onClick={() => setIsOn(!isOn)}
                className="cursor-pointer hover:bg-white bg-glass-500 p-2 rounded-sm"
              >
                {isOn ? (
                  <X className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                )}
              </motion.button>

              <div style={container}>
                <AnimatePresence initial={false}>
                  {isOn ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      key="box"
                      dir="ltr"
                      className={
                        "space-y-8 rounded-s-4xl rounded-br-4xl rounded-tr-sm bg-white absolute top-2 right-0 p-8 py-10"
                      }
                    >
                      <motion.div
                        onClick={() => console.log("Clicked")}
                        className="space-y-5"
                      >
                        {navItems.map((item, index) => (
                          <p key={index} className="text-xs cursor-pointer">
                            {item.label}
                          </p>
                        ))}
                      </motion.div>

                      <motion.div className="flex flex-row space-x-4  border border-red-400">
                        {socialMediaLinks.map((icon, index) => (
                          <div
                            className="cursor-pointer h-[2.2rem] w-[2.2rem] flex items-center justify-center !cursor-pointer bg-gray-100 rounded-full p-2"
                            key={index}
                          >
                            <icon.icon />
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const container: React.CSSProperties = {
  zIndex: 100,
};
