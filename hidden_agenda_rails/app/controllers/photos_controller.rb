class PhotosController < ApplicationController
  # before_action :authenticate_user!, only: [:index]
  def index
    render json: Photo.all, status:200
  end
  ​
  def show
    @photo = Photo.find(params[:id])
  end
  ​
  #post to create photo agenda
  def create
    @photo = Photo.new( photo_url: params[:photo_url], search_name: params[:search_name], description: params[:description])
  ​
    if @photo.save
      render 'show', formats: [:json], handlers: [:jbuilder], status: 201
    else
      render json: {error: "photo agenda could not be created."}, status: 422
    end
  end
  #delete
  def destroy
    @photo = Photo.find( params[:id])
  ​
    if @photo.destroy
      render json: {}, status: 200
    else
      render json: {error: 'could not delete photo'}, stauts: 422
    end
  end
end
