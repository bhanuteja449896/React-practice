
export default function EmailInput({value,onChange,error}){
    return(
        <>
        <h4>Email</h4>
        <input 
        type="text"
        value={value}
        onChange={(e)=> onChange(e.target.value)} />
        {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : value && (
                <p style={{ color: "green" }}>✔ Valid Email</p>
            )}
        </>
    )
}