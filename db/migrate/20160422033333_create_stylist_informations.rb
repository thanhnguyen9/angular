class CreateStylistInformations < ActiveRecord::Migration
  def change
    create_table :stylist_informations do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :photo
      t.text :bio
      t.string :shop_name
      t.string :shop_address
      t.float :latitude
      t.float :longitude
      t.float :rating
      t.integer :review
      t.string :profile_photo
      t.references :stylist, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
