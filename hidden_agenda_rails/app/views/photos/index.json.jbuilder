json.photos @photos do |photo|
  json.id photo.id
  json.photo_url photo.photo_url
  json.user_id photo.user_id
  json.search_name photo.search_name
  json.description photo.description
end
