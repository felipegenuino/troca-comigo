class TradeRequest < ApplicationRecord
  belongs_to :from_user
  belongs_to :to_user
  belongs_to :sticker
end
