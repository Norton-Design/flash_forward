class AreaModerator < ApplicationRecord
  validates :area_id, presence: true
  validates :mod_id, presence: true

  belongs_to :mod,
  foreign_key: :mod_id,
  class_name: :User

  belongs_to :area,
  foreign_key: :area_id,
  class_name: :Area
end
