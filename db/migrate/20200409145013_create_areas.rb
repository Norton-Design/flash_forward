class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.string :name, null: false
      t.integer :parent_id
      t.timestamps
    end
    add_index :areas, :parent_id
  end
end
