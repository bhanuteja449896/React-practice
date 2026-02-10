function Card({ children }) {
    return <div className="card">{children}</div>;
  }
  
export default function ProfileCard() {
    return (
      <Card >
        <h2>Ajay</h2>
        <p>React learner</p>
      </Card>
    );
  }
  