# @areas.each do |area|
#     json.set! area.id do
#         json.extract! area, :id, :name, :description, :lat, :lng
#         json.parentId area.parent_id 
#         json.gettingThere area.getting_there
#     end
# end





# For Root Area work
@root_areas.each do |area|
    json.set! area.id do
        json.extract! area, :id, :name
        json.childAreas area.child_areas, :id, :name
    end
end

# Rosemary snippet:
# json.root_areas do
    # @root_areas.each do |root_area|
    #     json.set! root_area.id do
    #         json.partial! 'area', area: area
    #     end
    # end
# end