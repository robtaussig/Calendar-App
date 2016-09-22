class AppointmentsController < ApplicationController
  def new

  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render :show
    else
      @errors = @appointment.errors.full_messages
      render json: @errors, status: 401
    end
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    @appointment.destroy!
    render :root
  end

  def index
    @appointments = Appointment.all
    render :index
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :description, :author_id,
      :appointment_date, :time, :email)
  end
end
