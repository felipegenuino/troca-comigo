"use client";

import { useEffect, useState } from "react";
import api from "./services/api";

export default function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await api.get("/albums");
        setAlbums(response.data);
      } catch (error) {
        if (error.response && error.response.data.errors) {
          alert(`Erro: ${error.response.data.errors.join(", ")}`);
        } else {
          alert("Erro ao buscar albums. Tente novamente.");
        }
      }
    }
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Álbuns Disponíveis</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
            <p>{album.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
