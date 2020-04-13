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
        # joins the tables to avoid additional querying
        @route = Route.includes(:sharer, :area).find(params[:id])
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
        )
    end

end