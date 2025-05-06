"use client";
import { useState } from "react";
import { ProductSearch } from "./ProductSearch";
import { ProductFilter } from "./ProductFilter";
import Image from "next/image";
import Link from "next/link";

export const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searched, setSearched] = useState("");

  const dataMockap = [
    { name: "Uno", id: "1", description: "Es el numero uno", type: "standard" },
    { name: "Dos", id: "2", description: "Es el numero dos", type: "standard" },
    {
      name: "Tres",
      id: "3",
      description: "Es el numero tres",
      type: "standard"
    },
    {
      name: "Cuatro",
      id: "4",
      description: "Es el numero cuatro",
      type: "standard"
    },
    {
      name: "Cinco",
      id: "5",
      description: "Es el numero cinco",
      type: "standard"
    },
    {
      name: "Seis",
      id: "6",
      description: "Es el numero seis",
      type: "standard"
    },
    {
      name: "Siete",
      id: "7",
      description: "Es el numero siete",
      type: "standard"
    },
    {
      name: "Ocho",
      id: "8",
      description: "Es el numero ocho",
      type: "premium"
    },
    {
      name: "Nueve",
      id: "9",
      description: "Es el numero nueve",
      type: "premium"
    },
    {
      name: "Diez",
      id: "10",
      description: "Es el numero diez",
      type: "premium"
    },
    {
      name: "Once",
      id: "11",
      description: "Es el numero once",
      type: "premium"
    },
    {
      name: "Doce",
      id: "12",
      description: "Es el numero doce",
      type: "premium"
    },
    {
      name: "Trece",
      id: "13",
      description: "Es el numero trece",
      type: "premium"
    },
    {
      name: "Catorce",
      id: "14",
      description: "Es el numero catorce",
      type: "premium"
    }
  ];

  return (
    <div className='col-span-12 flex flex-col gap-5'>
      <div className='w-full flex flex-row gap-6 justify-center'>
        {" "}
        <ProductSearch setSearched={setSearched} />
        <ProductFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <div className='flex justify-center h-fit'>
        <div className='flex gap-6 flex-wrap justify-center items-center'>
          {dataMockap
            .filter((item) => {
              const normalizedItemName = item.name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
              const normalizedSearched = searched
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
              return (
                normalizedItemName.includes(normalizedSearched) ||
                normalizedSearched === ""
              );
            })
            .filter(
              (item) => item.type === selectedFilter || selectedFilter === "all"
            )
            .map((marketItem, index) => (
              <Link
                href={marketItem.id}
                className='min-w-[12.5rem] flex flex-col items-center rounded-xl bg-zinc-800'
                key={index}
              >
                <div className='w-full relative aspect-square'>
                  <Image
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
                    }
                    fill
                    className='object-cover rounded-t-xl'
                    alt='photo'
                  />
                </div>
                <span className='mt-2'>{marketItem.name}</span>
                <span className='mt-2'>{marketItem.description}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
