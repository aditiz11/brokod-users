export default function UserCard({ user, onView }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company.name}</p>

      <button className="btn" onClick={onView}>
        View Details
      </button>
    </div>
  );
}
