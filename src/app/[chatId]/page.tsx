"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function Chat() {
  const { chatId } = useParams();
  console.log(chatId);
  return <div className='w-full p-10 text-white'>Chat {chatId}</div>;
}
