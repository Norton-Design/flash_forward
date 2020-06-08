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

ActiveRecord::Schema.define(version: 2020_06_08_214431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "area_moderators", force: :cascade do |t|
    t.bigint "area_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_id"], name: "index_area_moderators_on_area_id"
    t.index ["user_id"], name: "index_area_moderators_on_user_id"
  end

  create_table "areas", force: :cascade do |t|
    t.string "name", null: false
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "getting_there"
    t.integer "route_count", default: 0
    t.bigint "shared_by_id", null: false
    t.integer "elevation", null: false
    t.index ["parent_id"], name: "index_areas_on_parent_id"
    t.index ["shared_by_id"], name: "index_areas_on_shared_by_id"
  end

  create_table "route_comments", force: :cascade do |t|
    t.string "body", null: false
    t.string "comment_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "route_id", null: false
    t.index ["route_id"], name: "index_route_comments_on_route_id"
    t.index ["user_id"], name: "index_route_comments_on_user_id"
  end

  create_table "route_moderators", force: :cascade do |t|
    t.integer "route_id", null: false
    t.integer "mod_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mod_id"], name: "index_route_moderators_on_mod_id"
    t.index ["route_id"], name: "index_route_moderators_on_route_id"
  end

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.string "route_type", null: false
    t.string "difficulty", null: false
    t.integer "pitches", null: false
    t.integer "elevation", null: false
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "area_moderators", "areas"
  add_foreign_key "area_moderators", "users"
  add_foreign_key "areas", "users", column: "shared_by_id"
  add_foreign_key "route_comments", "routes"
  add_foreign_key "route_comments", "users"
end
