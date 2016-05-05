# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Photo.delete_all

Photo.create!([
  {id: 1, user_id: 1, photo_url: 'https://farm8.staticflickr.com/7733/26544615200_9be9c798a1.jpg', search_name: "barcelona", description: "located in Spain"}
])
