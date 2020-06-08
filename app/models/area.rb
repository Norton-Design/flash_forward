class Area < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :lat, presence: true
    validates :lng, presence: true
    validates :elevation, presence:true
    validates :shared_by_id, presence:true

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

    has_many :sibling_areas,
    through: :parent_area,
    source: :child_areas

    belongs_to :sharer,
    foreign_key: :shared_by_id,
    class_name: :User

    has_many :area_moderators,
    foreign_key: :area_id,
    class_name: :AreaModerator

    has_many :mods,
    through: :area_moderators,
    source: :mod

    has_many_attached :photos
end
