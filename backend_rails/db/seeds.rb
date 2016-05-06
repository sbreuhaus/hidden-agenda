# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Photo.delete_all

Photo.create!([
  {id:1, user_id: 1, photo_id: "26763091911", farm: 8, isfamily: 0, isfriend: 0, ispublic: 1, owner: "80573142@N07", secret: "3798b2776e", server: "7188", title: "Animal Rights Activist"}
])
