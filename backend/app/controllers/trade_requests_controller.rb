class TradeRequestsController < ApplicationController
    # Lista as solicitações de troca do usuário atual
    def index
      trades = TradeRequest.where(to_user_id: current_user.id)
      render json: trades, status: :ok
    end
  
    # Cria uma nova solicitação de troca
    def create
      trade_request = TradeRequest.new(trade_request_params)
      if trade_request.save
        render json: trade_request, status: :created
      else
        render json: { errors: trade_request.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # Atualiza o status de uma solicitação (ex.: "aceita", "recusada")
    def update
      trade_request = TradeRequest.find(params[:id])
      if trade_request.update(status: params[:status])
        render json: trade_request, status: :ok
      else
        render json: { errors: trade_request.errors.full_messages }, status: :unprocessable_entity
      end
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Solicitação de troca não encontrada" }, status: :not_found
    end
  
    private
  
    def trade_request_params
      params.require(:trade_request).permit(:from_user_id, :to_user_id, :sticker_id, :status)
    end
  end