json.array! @appointments do |appointment|
  json.id appointment.id
  json.title appointment.title
  json.description appointment.description
  json.author_id appointment.author_id
  json.appointment_date appointment.appointment_date
  json.time appointment.time
  json.email appointment.email
end
