class Api::AreasController < ApplicationController

    def index
        # adjust to get root areas and their first children
        @areas = Area.all
        @root_areas = Area.where(parent_id: nil)
        render :index
    end

    def show
        # debugger
        @area = Area.includes(:child_areas, :routes, :parent_area).find(params[:id])
        @parent_area = @area.parent_area
        @routes = @area.routes
        # debugger
        if @parent_area.nil?
            @parent_area = Area.new(name: "")
        end

        # refactor to grab backward path
        # debugger
        render :show
    end

    private

    def area_params
        params.require(:area).permit(
            :name,
            :parent_id,
            :description,
            :getting_there,
            :lat,
            :lng
        )
    end

end