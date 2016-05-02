class PhotosController < ApplicationController
  # before_action :authenticate_user!, only: [:index]
  def index
    render json: Photo.all, status:200
  end
end
