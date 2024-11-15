"use client";

import { useEffect, useState } from "react";
import api from "./services/api";

function AlbumList({ albums }) {
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id} className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{album.title}</h2>
          <p className="text-gray-500">{album.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await api.get("/albums");
        setAlbums(response.data);
      } catch (error) {
        setError(
          error.response?.data?.errors?.join(", ") || "Erro ao buscar álbuns."
        );
      } finally {
        setLoading(false);
      }
    }
    fetchAlbums();
  }, []);

  if (loading) return <div className="text-center p-4">Carregando...</div>;

  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  if (albums.length === 0)
    return (
      <div className="text-center p-4">
        <h1 className="text-xl font-semibold bg-indigo-500 text-white">
          Nenhum álbum encontrado
        </h1>
        <p className="text-gray-500">
          Parece que não há álbuns disponíveis no momento.
        </p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Álbuns Disponíveis
      </h1>
      <AlbumList albums={albums} />
    </div>
  );
}
