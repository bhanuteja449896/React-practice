export default function UserCard({ user }) {

    // placeholder avatar
    const avatar = `https://i.pravatar.cc/100?img=${user.id}`;

    return (
        <div style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
        }}>
            <img src={avatar} alt={user.name} />

            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    );
}
