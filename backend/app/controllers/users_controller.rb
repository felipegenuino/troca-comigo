class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render json: { user: user }, status: :created
    else
      Rails.logger.error("Erro ao salvar usuário: #{user.errors.full_messages}")
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  end