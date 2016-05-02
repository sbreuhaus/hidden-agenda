class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :photo_id
      t.string :search_name
      t.text :description

      t.timestamps null: false
    end
  end
end
