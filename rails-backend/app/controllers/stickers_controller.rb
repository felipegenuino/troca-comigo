class StickersController < ApplicationController
    # Lista todas as figurinhas de um álbum
    def index
      stickers = Sticker.where(album_id: params[:album_id])
      render json: stickers, status: :ok
    end
  
    # Atualiza o status de uma figurinha (ex.: "tenho" ou "preciso")
    def update
      sticker = Sticker.find(params[:id])
      if sticker.update(status: params[:status])
        render json: sticker, status: :ok
      else
        render json: { errors: sticker.errors.full_messages }, status: :unprocessable_entity
      end
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Figurinha não encontrada" }, status: :not_found
    end
  end