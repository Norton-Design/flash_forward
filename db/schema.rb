# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_09_143626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.string "route_type", null: false
    t.string "difficulty", null: false
    t.integer "pitches", null: false
    t.integer "elevation", null: false
    t.string "gps_loc", null: false
    t.string "description", null: false
    t.string "protection", null: false
    t.integer "area_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "shared_by", null: false
    t.index ["area_id"], name: "index_routes_on_area_id"
    t.index ["difficulty"], name: "index_routes_on_difficulty"
    t.index ["pitches"], name: "index_routes_on_pitches"
    t.index ["route_type"], name: "index_routes_on_route_type"
    t.index ["shared_by"], name: "index_routes_on_shared_by"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "mod_status", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
