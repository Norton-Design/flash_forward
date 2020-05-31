class ChangeRouteComments < ActiveRecord::Migration[5.2]
  def change
    change_column :route_comments, :user_id, :bigint, null: false
    change_column :route_comments, :route_id, :bigint, null: false
  end
end
