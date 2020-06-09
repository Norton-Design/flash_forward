
# Do I need to set this to an id? if I do how do I key into it directly.
# Do I use a currentArea key? do I evne need that?
# json.set! @area.id do
#     json.partial! "api/areas/area", area: @area
# end

# @parent_area needs to stay because of the nil potential
json.extract! @area, :id, :name, :description, :lat, :lng, :elevation
    json.parentId @area.parent_id 
    json.gettingThere @area.getting_there
    json.parentName @parent_area.name
    json.createdAt @area.created_at
    json.photo_urls @area.photos.map { |file| url_for(file) }

    json.routes do
        json.array! @area.routes, :id, :name, :difficulty
    end

    json.childAreas do
        json.array! @area.child_areas, :id, :name
    end

    json.pathway do
        json.array! @pathway, :id, :name
    end

    json.mods do
        json.array! @area.mods, :id, :first_name, :last_name
    end