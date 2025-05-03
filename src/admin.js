import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminPage() {
  const navigate = useNavigate();
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("terms")) || [];
    setTerms(saved);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus istilah ini?")) {
      const updated = terms.filter((term) => term.id !== id);
      setTerms(updated);
      localStorage.setItem("terms", JSON.stringify(updated));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleAdd = () => {
    navigate("/tambah");
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>🧢 Hello <strong>Admin</strong></h1>
        <button className="btn-add" onClick={handleAdd}>+ Tambah</button>
      </div>

      <h2>Daftar Istilah</h2>
      {terms.length === 0 ? (
        <p>Belum ada istilah</p>
      ) : (
        terms.map((term) => (
          <div key={term.id} className="term-card">
            <span className="term-word">
              <strong>{term.word}</strong> {term.emoji}
            </span>
            <div className="term-actions">
              <button className="btn-edit" onClick={() => handleEdit(term.id)}>Edit</button>
              <button className="btn-delete" onClick={() => handleDelete(term.id)}>Hapus</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminPage;
