Rails.application.routes.draw do
  devise_for :users
  # 下の行は削除する
  # get 'messages/index'
  
  root 'groups#index'
  resources :users, only: [:edit, :update, :index]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
