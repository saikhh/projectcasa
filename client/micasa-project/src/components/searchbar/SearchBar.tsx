
import React,{useState} from "react" 
function SearchBar(){ 
      const [searchTerm, setSearchTerm] = useState('');
    //   const [filteredData,setFiltereddata]=useState(data); 
const handleSearchSubmit=(e: { preventDefault: () => void; })=>{ 
    e.preventDefault()
}

return( 
    <form onSubmit={handleSearchSubmit}> 

    <input type="text" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

    <button type="submit">Search</button>

    </form>
)

}

export default SearchBar