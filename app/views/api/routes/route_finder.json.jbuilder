json.routes do 
  @routes.each do |route|
    json.set! route.id do 
      json.extract! route, :id, :name, :route_type, :pitches, :difficulty
      json.set! "routeArea", route.area.name
      json.set! "routeAreaId", route.area.id
    end
  end
end

json.areas do 
  @routes.each do |route|
    json.set! route.area.id do 
      json.extract! route.area, :id, :name
    end
  end
end