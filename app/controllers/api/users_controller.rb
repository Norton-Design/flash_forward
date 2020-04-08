class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    # def destroy
    #     @user = current_user,
    #     if @user
    #         @user.destroy
    #         render :new
    #     else
    #         render ["Not logged in."]
    #     end
    # end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end