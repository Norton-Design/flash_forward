class Api::AreasController < ApplicationController

    def index
        # adjust to get root areas and their first children
        @areas = Area.all
        @root_areas = Area.includes(:child_areas).where(parent_id: nil)
        render :index
    end

    def show
        # debugger
        @area = Area.includes(:child_areas, :routes, :parent_area, :sibling_areas).with_attached_photos.find(params[:id])
        @parent_area = @area.parent_area
        @pathway = pathway(@area.parent_id)
        # debugger
        if @parent_area.nil?
            @parent_area = Area.new(name: "")
        end

        # refactor to grab backward path
        # debugger
        render :show
    end

    def create
        mod_params = {
            name: area_params[:name],
            parent_id: area_params[:parent_id],
            description: area_params[:description],
            getting_there: area_params[:getting_there],
            lat: area_params[:lat],
            lng: area_params[:lng],
            photos: [area_params[:photo]]
        }

        @area = Area.new(mod_params)
        if @area.save
            # redirect?
        else
            render json: @area.errors.full_messages, status: 401
        end
    end

    def update
        mod_params = {
            name: area_params[:name],
            description: area_params[:description],
            getting_there: area_params[:getting_there],
            lat: area_params[:lat].to_f,
            lng: area_params[:lng].to_f,
        }

        @area = Area.find(params[:id])

        if @area.update(mod_params)
            if area_params[:photo]
                @area.photos.attach(area_params[:photo])
            end
            # render :show
        else
            render json: @area.errors.full_messages, status: 401
        end
    end

    private

    def pathway(parent_id)
        return [] if parent_id == nil 
        area = Area.find(parent_id)

        return pathway(area.parent_id).concat([area])
    end

    def area_params
        params.require(:area).permit(
            :name,
            :parent_id,
            :description,
            :getting_there,
            :lat,
            :lng,
            :photo
        )
    end

end