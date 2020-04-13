
class Api::SessionsController < ApplicationController

    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Invalid Email/Password combination"], status: 401
        end
    end

    def destroy
        logout!
    end

end