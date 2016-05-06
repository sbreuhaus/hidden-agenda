class User < ActiveRecord::Base
  # Include default devise modules.
  has_many :photos
  
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          # :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
end
