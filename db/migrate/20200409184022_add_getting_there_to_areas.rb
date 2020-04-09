class AddGettingThereToAreas < ActiveRecord::Migration[5.2]
  def change
    add_column :areas, :getting_there, :string, null:false
  end
end
