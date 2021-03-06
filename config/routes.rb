Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :routes, only: [:index, :show, :create, :update] do
      get 'route_finder', on: :collection
    end
    resources :areas, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :route_comments, only: [:create, :destroy]
  end
  root to: 'root#root'
end
