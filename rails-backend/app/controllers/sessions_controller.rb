require 'jwt'

class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      render json: { token: encode_token(user_id: user.id) }, status: :ok
    else
      render json: { error: 'Email ou senha inválidos' }, status: :unauthorized
    end
  end

  private

  def encode_token(payload)
    # JWT.encode(payload, Rails.application.secrets.secret_key_base)
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end
end