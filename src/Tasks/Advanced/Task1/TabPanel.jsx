export default function TabPanel({ activeTab }) {

    const content = [
        "🏠 Welcome to Home page",
        "ℹ️ About us content here",
        "📞 Contact us at support@example.com"
    ];

    return (
        <div style={{ marginTop: "20px" }}>
            <p>{content[activeTab]}</p>
        </div>
    );
}
