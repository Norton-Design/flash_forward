Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :routes, only: [:create, :destroy]
    resources :areas, only: [:create, :destory]
    resource :session, only: [:create, :destroy]
  end
  root to: 'root#root'
end
