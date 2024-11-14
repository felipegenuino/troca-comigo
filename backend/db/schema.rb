# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2024_11_13_173939) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_albums_on_user_id"
  end

  create_table "stickers", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "album_id", null: false
    t.bigint "user_id", null: false
    t.string "status", default: "missing"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_stickers_on_album_id"
    t.index ["user_id"], name: "index_stickers_on_user_id"
  end

  create_table "trade_requests", force: :cascade do |t|
    t.bigint "from_user_id", null: false
    t.bigint "to_user_id", null: false
    t.bigint "sticker_id", null: false
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["from_user_id"], name: "index_trade_requests_on_from_user_id"
    t.index ["sticker_id"], name: "index_trade_requests_on_sticker_id"
    t.index ["to_user_id"], name: "index_trade_requests_on_to_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "albums", "users"
  add_foreign_key "stickers", "albums"
  add_foreign_key "stickers", "users"
  add_foreign_key "trade_requests", "stickers"
  add_foreign_key "trade_requests", "users", column: "from_user_id"
  add_foreign_key "trade_requests", "users", column: "to_user_id"
end
