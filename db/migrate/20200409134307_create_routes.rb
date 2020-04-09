class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.string :route_type, null: false
      t.string :difficulty, null: false
      t.integer :pitches, null: false
      t.integer :elevation, null: false
      t.string :gps_loc, null: false
      t.string :description, null: false
      t.string :protection, null: false
      t.integer :area_id, null: false
      t.timestamps
    end
    add_index :routes, :difficulty
    add_index :routes, :pitches
    add_index :routes, :route_type
    add_index :routes, :area_id
  end
end
