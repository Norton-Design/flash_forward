class ChangeRoutesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :shared_by, :integer
    add_index :routes, :shared_by
  end
end
