class Api::RouteCommentsController < ApplicationController
  def create
    @comment = RouteComment.new(comment_params)

    # @comment.

    if @comment.save
      # render :show
    else
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