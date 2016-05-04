json.photos @photos do |photo|
  json.id photo.id
  json.photo_id photo.photo_id
  json.search_name photo.search_name
  json.description photo.description
end
