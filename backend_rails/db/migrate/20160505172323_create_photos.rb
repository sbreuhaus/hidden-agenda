class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :farm
      t.string :photo_id
      t.integer :user_id
      t.integer :isfamily
      t.integer :isfriend
      t.integer :ispublic
      t.string :owner
      t.string :secret
      t.string :server
      t.string :title

      t.timestamps null: false
    end
  end
end
