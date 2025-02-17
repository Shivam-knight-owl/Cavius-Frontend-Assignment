
interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
}

export const SearchBar = ({ search, setSearch }: SearchBarProps) => {

    const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
    }

    return(
        <div className="flex justify-center items-center mt-4 mb-2">
            <input type="text" placeholder="Search posts..."
             value={search}
             onChange={handleSearch}
             className=" text-center px-4 py-2 w-1/3 border border border-slate-600 rounded-3xl focus:outline-none focus:border-blue-700"/>
        </div>
    )
}