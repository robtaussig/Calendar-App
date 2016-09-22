class Appointment < ActiveRecord::Base
  validates :appointment_date, presence: true, uniqueness: true
  validates :title, :email, presence: true
end
