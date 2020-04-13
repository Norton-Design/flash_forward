Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :routes, only: [:show, :index]
    resources :areas, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
  root to: 'root#root'
end
