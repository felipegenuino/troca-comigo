class AlbumsController < ApplicationController
    # Lista todos os álbuns
    def index
      albums = Album.all
      render json: albums, status: :ok
    end
  
    # Exibe um álbum específico, incluindo suas figurinhas
    def show
      album = Album.find(params[:id])
      stickers = album.stickers
      render json: { album: album, stickers: stickers }, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Álbum não encontrado" }, status: :not_found
    end
  
    # Cria um novo álbum
    def create
      album = Album.new(album_params)
      if album.save
        render json: album, status: :created
      else
        render json: { errors: album.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def album_params
      params.require(:album).permit(:title, :description, :user_id)
    end
  end