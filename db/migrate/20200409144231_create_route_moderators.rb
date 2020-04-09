class CreateRouteModerators < ActiveRecord::Migration[5.2]
  def change
    create_table :route_moderators do |t|
      t.integer :route_id, null: false
      t.integer :mod_id, null: false
      t.timestamps
    end
    add_index :route_moderators, :route_id
    add_index :route_moderators, :mod_id
  end
end
