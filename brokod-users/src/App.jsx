import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  // ONE SEARCH BAR
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); // default search = name

  const [selectedUser, setSelectedUser] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  // NEW FILTER LOGIC
  const filtered = users.filter((u) => {
    if (searchType === "name") {
      return u.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (searchType === "company") {
      return u.company.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  // Pagination
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / usersPerPage);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="container">
      <h1 className="title">User Directory</h1>

      {/* 🔵 SINGLE SEARCH BAR WITH DROPDOWN */}
      <div className="filters" style={{ display: "flex", gap: "10px" }}>
        
        {/* DROPDOWN */}
        <select
          className="dropdown"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="name">Search by Name</option>
          <option value="company">Search by Company</option>
        </select>

        {/* SEARCH INPUT */}
        <input
          className="search"
          placeholder={`Search by ${searchType}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="user-grid">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} onView={() => setSelectedUser(user)} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            scrollToTop();
          }}
        >
          Prev
        </button>

        <span>
          Page {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            scrollToTop();
          }}
        >
          Next
        </button>
      </div>

      {/* SCROLL BUTTON */}
      <button className="scrollTop" onClick={scrollToTop}>⬆</button>

      {/* MODAL */}
      {selectedUser && (
        <UserModal 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}
    </div>
  );
}

export default App;
