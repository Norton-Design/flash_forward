class ChangeRoutesTableSharedByCol < ActiveRecord::Migration[5.2]
  def change
    change_column_null :routes, :shared_by, false
  end
end
