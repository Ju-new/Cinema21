// const Topbar = () => (
//   <div className="flex justify-between p-5 bg-[#f3eaea] rounded-[15px]">
//     <input type="text" placeholder="Search location" className="w-[1000px] p-4 rounded-[20px] border border-[#ddd] text-base" />
//   </div>
// );

// export default Topbar;

interface SearchProps {
  setSearch: (value: string) => void; // Deklarasi tipe untuk setSearch
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
  return <input type="text" placeholder="Search location" className="w-[1000px] p-4 rounded-[20px] border border-[#ddd] text-base" onChange={({ currentTarget: input }) => setSearch(input.value)} />;
};

export default Search;
