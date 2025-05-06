import { useState } from "react";
import { ArrowDown } from "../svg/ArrowDown";
interface Props {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}
export const ProductFilter = ({ selectedFilter, setSelectedFilter }: Props) => {
  const handleFontSelect = (font: string) => {
    setSelectedFilter(font);
    setIsDropdownOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fonts = ["all", "standard", "premium"];

  return (
    <div className='relative dark:text-white flex gap-2'>
      Filter:
      <div
        className='h-7 outline w-36 lg:w-72 select-none outline-secondary-neutro dark:text-white rounded px-3 flex items-center justify-between cursor-pointer'
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span className='inline-block text-ellipsis text-nowrap overflow-hidden'>
          {selectedFilter.slice(0, 1).toUpperCase() +
            selectedFilter.slice(1).split("_").join(" ")}
        </span>
        <div
          className={`
                ${isDropdownOpen ? "-rotate-180" : ""}
                transition-all duration-500 ease-in-out dark:fill-white`}
        >
          <ArrowDown />
        </div>
      </div>
      {isDropdownOpen && (
        <div className='absolute top-full left-0 w-full border border-secondary-neutro rounded bg-white dark:bg-black dark:text-white shadow-md z-10 rounded-b-md overflow-hidden'>
          {fonts.map((font) => (
            <div
              key={font}
              className='px-3 py-2 hover:bg-primary dark:hover:bg-gray-100 hover:text-primary-neutro transition-colors cursor-pointer'
              onClick={() => handleFontSelect(font)}
            >
              {font.slice(0, 1).toUpperCase() +
                font.slice(1).split("_").join(" ")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
