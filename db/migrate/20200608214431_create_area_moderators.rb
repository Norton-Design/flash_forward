class CreateAreaModerators < ActiveRecord::Migration[5.2]
  def change
    create_table :area_moderators do |t|
      t.references :area, null: false, foreign_key: true, index: true
      t.references :user, null: false, foreign_key: true, index: true
      t.timestamps
    end
  end
end
