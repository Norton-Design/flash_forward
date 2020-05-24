class AddRouteCountToAreas < ActiveRecord::Migration[5.2]
  def change
    add_column :areas, :route_count, :integer, :default => 0
  end
end
