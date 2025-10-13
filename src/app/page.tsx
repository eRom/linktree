"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type LinkItem = {
  name: string;
  url: string;
  color: string;
  icon?: IconDefinition;
  customIcon?: string;
};

export default function Home() {
  const links: LinkItem[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/romainecarnot/",
      icon: faLinkedin,
      color: "hover:bg-[#0077B5]",
    },
    {
      name: "Github",
      url: "https://github.com/eRom",
      icon: faGithub,
      color: "hover:bg-[#333333]",
    },
    {
      name: "Health in Cloud",
      url: "https://www.healthincloud.app",
      customIcon: "https://dev.healthincloud.app/icon-512.png",
      color: "hover:bg-[#10b981]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-start justify-center p-8 pt-20">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 mb-6">
            <Image
              src="https://avatars.githubusercontent.com/u/146684?s=400&u=66a228f8030e491a4115a4e6b2f06eceb03a7f6a&v=4"
              alt="Romain Ecarnot"
              fill
              className="rounded-full object-cover border-4 border-white shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Romain Ecarnot
          </h1>
          <p className="text-xl text-white/90 font-medium text-center">
            Architecte
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-0 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Button
                  variant="ghost"
                  className={`w-full h-16 text-lg font-semibold flex items-center justify-center gap-4 ${link.color} transition-colors duration-300`}
                >
                  {link.customIcon ? (
                    <div className="relative w-6 h-6">
                      <Image
                        src={link.customIcon}
                        alt={link.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : link.icon ? (
                    <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                  ) : null}
                  <span>{link.name}</span>
                </Button>
              </Card>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm">
            © 2025 Romain Ecarnot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
