export default function Stories() {
  const users = ["AI", "Rahul", "Priya", "John", "Emma"];

  return (
    <div className="d-flex gap-2 overflow-auto p-2">

      {users.map((u, i) => (
        <div key={i} className="story glass">
          <img
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${u}`}
            alt=""
          />
          <small>{u}</small>
        </div>
      ))}

    </div>
  );
}