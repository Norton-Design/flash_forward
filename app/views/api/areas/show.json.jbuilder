
# Do I need to set this to an id? if I do how do I key into it directly.
# Do I use a currentArea key? do I evne need that?
# json.set! @area.id do
#     json.partial! "api/areas/area", area: @area
# end

json.extract! @area, :id, :name, :description, :lat, :lng
    json.parentId area.parent_id 
    json.gettingThere area.getting_there

# json.parentArea do
#     json.id @area.parent_area.id
#     json.name @area.parent_area.first_name
#     json.lastName @area.sharer.last_name
# end 

# json.routes do
#     json.array! @area.routes do |route|
#         json.route.id do
#             json.id route.id
#             json.name route.name
#             json.difficulty route.difficulty
#         end
#     end
# end