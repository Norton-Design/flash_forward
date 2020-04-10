@areas.each do |area|
    json.set! area.id do
        json.partial! 'area', area: area
    end
end

# json.root_areas do
#     @root_areas.each do |root_area|
#             json.set! root_area.id do
#             json.partial! 'area', area: area
#         end
#     end
# end