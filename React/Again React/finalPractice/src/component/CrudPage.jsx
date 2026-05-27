import { useState } from "react";

const CrudPage = () => {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  // CREATE & UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setItems(
        items.map((item) =>
          item.id === editId ? { ...item, name } : item
        )
      );
      setEditId(null);
    } else {
      setItems([...items, { id: Date.now(), name }]);
    }

    setName("");
  };

  // DELETE
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // EDIT
  const handleEdit = (item) => {
    setName(item.name);
    setEditId(item.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD Page</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {/* TABLE */}
      <table className="table" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="3" align="center">
                No Data Found
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudPage;
