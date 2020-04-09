class AddNullRestrictionsToAreas < ActiveRecord::Migration[5.2]
  def change
    change_column_null :areas, :description, false
    change_column_null :areas, :lat, false
    change_column_null :areas, :lng, false
  end
end
