"use client";

import { House, MessageCircleHeart, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideNavbar() {
  const routes = [
    { name: "Home", url: "/", icon: <House /> },
    { name: "Chats", url: "/chats", icon: <MessageCircleHeart /> },
    { name: "Profile", url: "/profile", icon: <UserRound /> }
  ];

  const path = usePathname();

  return (
    <div className='h-full p-6 flex flex-col gap-6'>
      <Image
        className='rounded-xl m-4'
        alt='logo'
        src={"/aiIcon.png"}
        width={100}
        height={100}
      />
      {routes.map((route, index) => {
        return (
          <Link
            href={route.url}
            key={index}
            style={{
              color: path === route.url ? "#8046d7" : "white"
            }}
            className='flex flex-row gap-3 hover:bg-[#311251] px-4 py-2 rounded-xl'
          >
            {route.icon}
            <div className='text-xl'>{route.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
