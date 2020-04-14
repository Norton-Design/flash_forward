class Api::RoutesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :edit]

    def create
        @route = Route.new(route_params)
        @route.shared_by = current_user.id
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    # def index
    # end

    # def destroy
    # end

    # def update
    # end

    def show
        # joins the tables to avoid additional querying (I don't think this is joining...)
        @route = Route.includes(:sharer, :area, :sibling_routes).find(params[:id])
        @pathway = pathway(@route.area_id)

        render :show
    end

    private

    def pathway(area_id)
        return [] if area_id == nil 
        area = Area.find(area_id)

        return pathway(area.parent_id).concat([area])
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
        )
    end

end