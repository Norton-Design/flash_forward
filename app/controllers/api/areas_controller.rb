class Api::AreasController < ApplicationController

    def index
        @areas = Area.all()
        @root_areas = Area.where("parent_id IS NULL")
        render :index
    end

    def show
        @area = Area.find(params[:id])
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