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

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (wrapperRef.current && e.composedPath().includes(wrapperRef.current)) {
        return;
      }
      // Otherwise close
      setIsOn(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

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
    <header className="bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
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

          <div className="relative" ref={wrapperRef}>
            <motion.button
              layout
              onClick={() => setIsOn(!isOn)}
              className="cursor-pointer hover:bg-white bg-glass-500 p-2 rounded-sm"
            >
              {isOn ? <X size={15} /> : <Menu size={15} />}
            </motion.button>

            <div className="z-40">
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
                      className="space-y-5 border border-red-400"
                    >
                      {navItems.map((item, index) => (
                        <p
                          key={index}
                          className="text-xs cursor-pointer border border-red-400"
                        >
                          {item.label}
                        </p>
                      ))}
                    </motion.div>

                    <motion.div className="flex flex-row space-x-4  border border-red-400">
                      {socialMediaLinks.map((icon, index) => (
                        <div
                          className="z-40 cursor-pointer h-[2.2rem] w-[2.2rem] flex items-center justify-center !cursor-pointer bg-gray-100 rounded-full p-2"
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

          {/* Desktop Actions */}
          {/* <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {mounted && <ThemeToggle />}
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 text-sm lg:text-base px-4 lg:px-6">
                Contact
              </Button>
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {mounted && <ThemeToggle />}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.href
                      ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
