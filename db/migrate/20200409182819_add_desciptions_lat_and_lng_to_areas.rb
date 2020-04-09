class AddDesciptionsLatAndLngToAreas < ActiveRecord::Migration[5.2]
  def change
    add_column :areas, :description, :string
    add_column :areas, :lat, :float
    add_column :areas, :lng, :float
  end
end
