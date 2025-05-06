interface Props {
  setSearched: React.Dispatch<React.SetStateAction<string>>;
}
export const ProductSearch = ({ setSearched }: Props) => {
  const handleFontSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(e.target.value);
  };

  return (
    <div className='relative dark:text-white flex gap-2'>
      Search:
      <input
        type='text'
        onChange={(e) => handleFontSelect(e)}
        className='h-7 outline bg-secondary-neutro w-36 lg:w-72 select-none outline-secondary-neutro  dark:text-white rounded px-3 flex items-center justify-between'
      ></input>
    </div>
  );
};
