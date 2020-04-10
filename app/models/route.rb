# create_table "routes", force: :cascade do |t|
#     t.string "name", null: false
#     t.string "route_type", null: false
#     t.string "difficulty", null: false
#     t.integer "pitches", null: false
#     t.integer "elevation", null: false
#     t.string "description", null: false
#     t.string "protection", null: false
#     t.integer "area_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.integer "shared_by", null: false
#     t.index ["area_id"], name: "index_routes_on_area_id"
#     t.index ["difficulty"], name: "index_routes_on_difficulty"
#     t.index ["pitches"], name: "index_routes_on_pitches"
#     t.index ["route_type"], name: "index_routes_on_route_type"
#     t.index ["shared_by"], name: "index_routes_on_shared_by"
# end
#

class Route < ApplicationRecord
    validates :name, presence: true
    validates :route_type, presence: true
    validates :difficulty, presence: true
    validates :pitches, presence: true
    validates :elevation, presence: true
    validates :description, presence: true
    validates :protection, presence: true
    validates :area_id, presence: true
    validates :shared_by, presence: true

    has_many :route_moderators,
    foreign_key: :route_id,
    class_name: :RouteModerator

    has_many :mods,
    through: :route_moderators,
    source: :mod

    belongs_to :area,
    foreign_key: :area_id,
    class_name: :Area

    belongs_to :sharer,
    foreign_key: :shared_by,
    class_name: :User
end
