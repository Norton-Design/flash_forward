class Api::RoutesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :edit]

    def create
        @route = Route.create!(route_params)
    end

    # def index
    # end

    # def destroy
    # end

    # def update
    # end

    def show
        @route = Route.find(params[:id])
        render :show
    end

    def route_params
        params.require(:route).permit(
            :name,
            :route_type,
            :difficulty,
            :pitches,
            :elevation,
            :description,
            :protection,
            :area_id,
            :shared_by
        )
    end

end