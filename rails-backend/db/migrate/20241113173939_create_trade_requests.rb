class CreateTradeRequests < ActiveRecord::Migration[8.0]
  def change
    create_table :trade_requests do |t| 
      t.references :from_user, null: false, foreign_key: { to_table: :users }
      t.references :to_user, null: false, foreign_key: { to_table: :users }
      t.references :sticker, null: false, foreign_key: true
      t.string :status, default: "pending" # Pode ser "accepted" ou "declined"
 
      t.timestamps
    end
  end
end
