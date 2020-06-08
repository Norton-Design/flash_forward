class AreaModerator < ApplicationRecord
  validates :area_id, presence: true
  validates :user_id, presence: true

  belongs_to :mod,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :area,
  foreign_key: :area_id,
  class_name: :Area
end
