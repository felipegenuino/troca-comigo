"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../../services/api";

export default function Album() {
  const [stickers, setStickers] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      async function fetchStickers() {
        try {
          const response = await api.get(`/albums/${id}/stickers`);
          setStickers(response.data);
        } catch (error) {
          if (error.response && error.response.data.errors) {
            alert(`Erro: ${error.response.data.errors.join(", ")}`);
          } else {
            alert("Erro ao registrar figurinhas. Tente novamente.");
          }
        }
      }
      fetchStickers();
    }
  }, [id]);

  return (
    <div>
      <h1>Figurinhas do Álbum</h1>
      <ul>
        {stickers.map((sticker) => (
          <li key={sticker.id}>
            <p>{sticker.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
