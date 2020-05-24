json.extract! @route, :id, :name, :difficulty, :pitches, :elevation, :description, :protection
    json.routeType @route.route_type
    json.createdAt @route.created_at
    json.photo_urls @route.photos.map { |file| url_for(file) }

json.sharer do
    json.id @route.sharer.id
    json.firstName @route.sharer.first_name
    json.lastName @route.sharer.last_name
end 

json.area do
    json.id @route.area.id
    json.name @route.area.name
end

json.siblingRoutes do
    json.array! @route.sibling_routes, :id, :name, :difficulty
end

json.pathway do
    json.array! @pathway, :id, :name
end

json.mods do
    json.array! @route.mods, :id, :first_name, :last_name
end