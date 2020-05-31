class RouteComment < ApplicationRecord
  validates :route_id, presence: true
  validates :user_id, presence: true
  validates :body, presence: true
  validates :comment_type, inclusion: ['TEMP', 'ITEM', 'BETA']

  belongs_to :author,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :route,
  foreign_key: :route_id,
  class_name: :Route
end