
class Api::SessionsController < ApplicationController

    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ["Sorry, but doesn't seem to be a valid email address"], status: 401
            # flash.new[:errors] = ["Invalid Signin Combination."]
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        logout!
        render json: {message: "Logout Successful"}
    end

end