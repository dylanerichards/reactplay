Rails.application.routes.draw do
  get 'todos/create'

  get "pages/home"
  root "pages#home"

  post "/todos", to: "todos#create"
  get "/todos", to: "todos#index"
end
