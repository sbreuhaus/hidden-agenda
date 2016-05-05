class PhotosController < ApplicationController

  def index
    render json: Photo.all, status:200
  end
end
