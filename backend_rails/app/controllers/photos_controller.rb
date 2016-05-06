class PhotosController < ApplicationController

  def index
    render json: Photo.all
  end

  #get one photo
  def show
    @photo = Photo.find(params[:id])
  end

  #post to create pic
  def create
    @photo = Photo.new(farm: params[:farm], photo_id: params[:photo_id], user_id: params[:user_id], isfamily: params[:isfamily], isfriend: params[:isfriend], ispublic: params[:ispublic], owner: params[:owner], secret: params[:secret], server: params[:server], title: params[:title])

    if @photo.save
      render json: @photo, status: 201
    else
      render json: {error: 'photo could not be created/save'}, status: 422
    end
  end

  #destroy
  def destroy
    @photo = Photo.find(params[:id])

    if @photo.destroy
      render json: {}, status: 200
    else
      render json: {error: 'could not delete photo'}, status: 422
    end
  end
end
