class ChangeAreaGettingThereColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :areas, :getting_there, true
  end
end
