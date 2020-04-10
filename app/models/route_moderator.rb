# create_table "route_moderators", force: :cascade do |t|
#     t.integer "route_id", null: false
#     t.integer "mod_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["mod_id"], name: "index_route_moderators_on_mod_id"
#     t.index ["route_id"], name: "index_route_moderators_on_route_id"
# end
#

class RouteModerator < ApplicationRecord
    validates :route_id, presence: true
    validates :mod_id, presence: true

    belongs_to :mod,
    foreign_key: :mod_id,
    class_name: :User

    belongs_to :route,
    foreign_key: :route_id,
    class_name: :Route
end
