class Api::RouteCommentsController < ApplicationController
  def create
    mod_params = {
      user_id: comment_params[:user_id],
      route_id: comment_params[:route_id],
      body: comment_params[:body],
      comment_type: comment_params[:comment_type],
    }

    if mod_params[:body] == 'null' || mod_params[:body] == 'undefined'
      mod_params[:body] = undefined
    end

    @comment = RouteComment.new(mod_params)

    if !@comment.save
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def delete
    @comment = RouteComment.find(params[:id])

    if @comment.user_id == current_user.id
      @comment.destroy!
    else
      render json: ['Comments that you have not authored cannot be destroyed.'], status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :user_id,
      :route_id,
      :body,
      :comment_type,
    )
  end
end