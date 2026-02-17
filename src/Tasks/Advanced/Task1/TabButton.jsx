export default function TabButton({ label, isActive, onClick }) {

    const style = {
        padding: "8px 16px",
        cursor: "pointer",
        border: "1px solid gray",
        backgroundColor: isActive ? "#333" : "#eee",
        color: isActive ? "#fff" : "#000"
    };

    return (
        <button style={style} onClick={onClick}>
            {label}
        </button>
    );
}
