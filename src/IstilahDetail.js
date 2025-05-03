import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IstilahDetail.css";

function IstilahDetail({ selectedWord }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!selectedWord) return;

    axios
      .get(`http://localhost/glosarium-api/getIstilah.php?kata=${selectedWord}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [selectedWord]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="istilah-container">
      {/* Sidebar bisa tetap */}
      <div className="detail-content">
        <h1>{data.kata} 🚩</h1>
        <p className="kelas-kata"><strong>Kelas kata:</strong> {data.kelas_kata}</p>

        <div className="card">
          <strong>Definisi:</strong>
          <ol>
            {data.definisi.split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="card">
          <strong>Sinonim Gaul:</strong>
          <p>{data.sinonim}</p>
        </div>

        <div className="card">
          <strong>Kata Terkait:</strong>
          <p>{data.terkait}</p>
        </div>
      </div>
    </div>
  );
}

export default IstilahDetail;
