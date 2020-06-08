class AddColsToAreas < ActiveRecord::Migration[5.2]
  def change
    add_reference :areas, :shared_by, foreign_key: { to_table: :users }, null: false
    add_column :areas, :elevation, :integer, null: false
  end
end
