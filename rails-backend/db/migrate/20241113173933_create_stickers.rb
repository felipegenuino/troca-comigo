class CreateStickers < ActiveRecord::Migration[8.0]
  def change
    create_table :stickers do |t|
      t.string :name, null: false
      t.references :album, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :status, default: "missing" # Pode ser "have" ou "missing"

      t.timestamps
    end
  end
end
