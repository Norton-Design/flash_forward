class RemoveGpsFromRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :gps_loc, :string
  end
end
