class User < ActiveRecord::Base
  has_many :photos
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
          # :confirmable # :omniauthable
  include DeviseTokenAuth::Concerns::User
end
