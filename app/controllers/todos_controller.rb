class TodosController < ApplicationController
  def create
    Todo.create(description: params[:description])
  end

  def index
    render json: { todos: Todo.all }
  end
end
