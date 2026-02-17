export default function({search,setSearch}){
    return(
        <input 
        type="text" 
        onChange={e=>setSearch(e.target.value)} 
        value={search} 
        placeholder="Search" 
        style={{ padding: "8px", marginBottom: "10px" }}/>
    )
}