
export default function PasswordInput({value,onChange,error}){
    return(
        <div>
            <h4>Password</h4>

            <input
                type="password"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : value && (
                <p style={{ color: "green" }}>✔ Strong Password</p>
            )}
        </div>
    )

}