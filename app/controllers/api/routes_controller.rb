class Api::RoutesController < ApplicationController
    # before_action :ensure_logged_in, only: [:create]

    def create
        mod_params = {
            name: route_params[:name],
            route_type: route_params[:route_type],
            difficulty: route_params[:difficulty],
            pitches: route_params[:pitches],
            elevation: route_params[:elevation],
            description: route_params[:description],
            protection: route_params[:protection],
            area_id: route_params[:area_id],
        }

        # if current_user.nil?
        #     render json: ['Must be logged in to create a route'], status: 401
        # end

        if route_params[:photo]
            mod_params[:photos] = [route_params[:photo]]
        end

        @route = Route.new(mod_params)
        if !current_user.nil?
            @route.shared_by = current_user.id
        end
        @pathway = pathway(@route.area_id)
        @comment_users = []

        if @route.save
            @pathway.each do |area|
                area.update({route_count: area.route_count + 1})
                render :show
            end
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    def update
        mod_params = {
            name: route_params[:name],
            route_type: route_params[:routeType],
            difficulty: route_params[:difficulty],
            pitches: route_params[:pitches].to_i,
            elevation: route_params[:elevation].to_i,
            description: route_params[:description],
            protection: route_params[:protection],
        }

        @route = Route.find(params[:id])

        if @route.update(mod_params)
            if route_params[:photo]
                @route.photos.attach(route_params[:photo])
            end
            render :show
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    def show
        @route = Route.includes(:sharer, :area, :sibling_routes, :route_moderators, :comments).with_attached_photos.find(params[:id])
        @pathway = pathway(@route.area_id)

        comment_users_ids = @route.comments.map { |comment| comment.user_id }
        @comment_users = User.find(comment_users_ids)

        render :show
    end

    def route_finder
        boulder_grades = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"]
        yds_grades = ["5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"]
        mixed_grades = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15"]
        aid_grades = ['A1', 'A2', 'A3', 'A4', 'A5', 'C1', 'C2', 'C3', 'C4', 'C5']

        searchParams = {
            route_type: params["route_type"],
            pitches: params["pitches"].to_i..50,
        }

        if params["pitches"] == '1*'
            searchParams[:pitches] = 1
        end

        case params["route_type"]
        when "Boulder"
            searchParams["difficulty"] = boulder_grades[boulder_grades.index(params["difficulty_min"])..boulder_grades.index(params["difficulty_max"])]
        when "Aid"
            searchParams["difficulty"] = aid_grades[aid_grades.index(params["difficulty_min"])..aid_grades.index(params["difficulty_max"])]
        when "Ice/Mixed"
            searchParams["difficulty"] = mixed_grades[mixed_grades.index(params["difficulty_min"])..mixed_grades.index(params["difficulty_max"])]
        else
            searchParams["difficulty"] = yds_grades[yds_grades.index(params["difficulty_min"])..yds_grades.index(params["difficulty_max"])]
        end

        @routes = Route.includes(:area).where(searchParams)
    end

    private

    def pathway(area_id)
        return [] if area_id == nil 
        area = Area.find(area_id)
 
        return pathway(area.parent_id).concat([area])
    end

    def route_params
        params.require(:route).permit(
            :id,
            :name,
            :route_type,
            :difficulty,
            :pitches,
            :elevation,
            :description,
            :protection,
            :area_id,
            :photo,
        )
    end

end