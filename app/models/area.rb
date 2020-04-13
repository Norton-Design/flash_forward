# create_table "areas", force: :cascade do |t|
#     t.string "name", null: false
#     t.integer "parent_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.string "description", null: false
#     t.float "lat", null: false
#     t.float "lng", null: false
#     t.string "getting_there"
#     t.index ["parent_id"], name: "index_areas_on_parent_id"
# end

class Area < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :lat, presence: true
    validates :lng, presence: true

    has_many :routes,
    foreign_key: :area_id,
    class_name: :Route

    belongs_to :parent_area,
    foreign_key: :parent_id,
    class_name: :Area,
    optional: true


    has_many :child_areas,
    foreign_key: :parent_id,
    class_name: :Area

    has_many :child_routes,
    through: :child_areas,
    source: :routes
end
