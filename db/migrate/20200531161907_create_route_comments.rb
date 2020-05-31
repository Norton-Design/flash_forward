class CreateRouteComments < ActiveRecord::Migration[5.2]
  def change
    create_table :route_comments do |t|
      t.string :body, null: false
      t.string :comment_type, null: false
      t.timestamps
    end
    add_reference :route_comments, :user, foreign_key: true
    add_reference :route_comments, :route, foreign_key: true
  end
end
