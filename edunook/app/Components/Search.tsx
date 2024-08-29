import { useState } from "react";

interface SearchProps {
  setSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  // Move the state and the handler inside the component
  const [isVisible, setIsVisible] = useState(false);

  const handleSearchChange = (searchValue: string) => {
    setSearch(searchValue);
    setIsVisible(searchValue.trim() !== "");
  };

  return (
    <input
      type="text"
      placeholder="Search location"
      className="w-[1000px] p-4 rounded-[20px] border border-[#ddd] text-base text-black"
      onChange={({ currentTarget: input }) => handleSearchChange(input.value)}
    />
  );
};

export default Search;


