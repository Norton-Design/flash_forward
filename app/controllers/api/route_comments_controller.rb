class Api::RouteCommentsController < ApplicationController
  def create
  end

  def delete
  end

  private

  def comment_params
    params.require(:area).permit(
        :user_id,
        :route_id,
        :body,
        :comment_type,
    )
  end
end